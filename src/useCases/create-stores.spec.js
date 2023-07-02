import { beforeEach, describe, expect, it, test } from "vitest";
import { ProductStatus } from "@prisma/client";

import { InMemoryStoresRepository } from "../repository/in-memory/in-memory-stores-repository";
import { InMemoryProductsRepository } from "../repository/in-memory/in-memory-products-repository";
import { InMemoryInventoriesRepository } from "../repository/in-memory/in-memory-inventories-repository";

import { CreateStoreUseCase } from "../useCases/create-store-use-case";
import { CreateProductUseCase } from "../useCases/create-product-use-case";

import { ListInventoriesUseCase } from "../useCases/list-inventories-use-case";

import { StoreAlreadyExists } from "../useCases/errors/store-already-exists";

let storesRepository;
let productsRepository;
let inventoriesRepository;

let createStoreUseCase;
let createProductUseCase;
let listInventoriesUseCase;

describe("Create Store Use Case", () => {
  beforeEach(() => {
    storesRepository = new InMemoryStoresRepository();
    productsRepository = new InMemoryProductsRepository();
    inventoriesRepository = new InMemoryInventoriesRepository();

    createStoreUseCase = new CreateStoreUseCase(
      storesRepository,
      productsRepository,
      inventoriesRepository
    );
    createProductUseCase = new CreateProductUseCase(
      productsRepository,
      storesRepository,
      inventoriesRepository
    );
    listInventoriesUseCase = new ListInventoriesUseCase(inventoriesRepository);
  });

  it("should be able to create new stores", async () => {
    const newStore = {
      name: "Loja 1",
      address: "Rua exemplo 000",
      phone: "+55 (21) 9 9999-9999",
    };

    const res = await createStoreUseCase.execute(newStore);

    expect(res.store).toContain(newStore);
  });

  it("should not be able to create multiple stores with the same name", async () => {
    const newStore = {
      name: "Loja 1",
      address: "Rua exemplo 000",
      phone: "+55 (21) 9 9999-9999",
    };

    await createStoreUseCase.execute(newStore);

    await expect(async () => {
      await createStoreUseCase.execute(newStore);
    }).rejects.toBeInstanceOf(StoreAlreadyExists);
  });

  it("should automatic create an inventory for each product when a new store is create", async () => {
    const newProduct_1 = {
      name: "Produto 1",
      price: 9.99,
      cost: 4.99,
      status: ProductStatus.active,
      category: "Vestuário",
    };
    const newProduct_2 = {
      name: "Produto 2",
      price: 9.99,
      cost: 4.99,
      status: ProductStatus.active,
      category: "Vestuário",
    };
    const newProduct_3 = {
      name: "Produto 3",
      price: 9.99,
      cost: 4.99,
      status: ProductStatus.active,
      category: "Vestuário",
    };

    await createProductUseCase.execute(newProduct_1);
    await createProductUseCase.execute(newProduct_2);
    await createProductUseCase.execute(newProduct_3);

    const newStore = {
      name: "Loja 1",
      address: "Rua exemplo 000",
      phone: "+55 (21) 9 9999-9999",
    };

    await createStoreUseCase.execute(newStore);

    const ListInventoriesResponse = await listInventoriesUseCase.execute();

    expect(ListInventoriesResponse.inventories).toHaveLength(3);
  });
});
