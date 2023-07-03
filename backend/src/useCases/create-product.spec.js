import { beforeEach, describe, expect, it } from "vitest";
import { ProductStatus } from "@prisma/client";
import { ProductAlreadyExists } from "./errors/product-already-exists.js";

import { InMemoryProductsRepository } from "../repository/in-memory/in-memory-products-repository.js";
import { CreateProductUseCase } from "./create-product-use-case.js";

import { InMemoryStoresRepository } from "../repository/in-memory/in-memory-stores-repository.js";
import { CreateStoreUseCase } from "./create-store-use-case.js";

import { InMemoryInventoriesRepository } from "../repository/in-memory/in-memory-inventories-repository.js";
import { ListInventoriesUseCase } from "./list-inventories-use-case.js";

let productsRepository;
let createProductUseCase;

let storesRepository;
let createStoreUseCase;

let inventoriesRepository;
let listInventoriesUseCase;

describe("Create Product Use Case", () => {
  beforeEach(() => {
    productsRepository = new InMemoryProductsRepository();
    storesRepository = new InMemoryStoresRepository();
    inventoriesRepository = new InMemoryInventoriesRepository();

    createProductUseCase = new CreateProductUseCase(
      productsRepository,
      storesRepository,
      inventoriesRepository
    );
    createStoreUseCase = new CreateStoreUseCase(
      storesRepository,
      productsRepository,
      inventoriesRepository
    );
    listInventoriesUseCase = new ListInventoriesUseCase(inventoriesRepository);
  });

  it("should be able to create new products", async () => {
    const newProduct = {
      name: "Produto 1",
      price: 9.99,
      cost: 4.99,
      status: ProductStatus.active,
      category: "Vestuário",
    };

    const res = await createProductUseCase.execute(newProduct);

    expect(res.product).toContain(newProduct);
  });

  it("should not be able to create multiple products with the same name", async () => {
    const newProduct = {
      name: "Produto 1",
      price: 9.99,
      cost: 4.99,
      status: ProductStatus.active,
      category: "Vestuário",
    };

    await createProductUseCase.execute(newProduct);

    await expect(async () => {
      await createProductUseCase.execute(newProduct);
    }).rejects.toBeInstanceOf(ProductAlreadyExists);
  });

  it("should automatic create an inventory for each store when a new product is create", async () => {
    const newStore_1 = {
      name: "Loja 1",
      address: "Rua exemplo 001",
      phone: "+55 (21) 9 9999-9991",
    };
    const newStore_2 = {
      name: "Loja 2",
      address: "Rua exemplo 002",
      phone: "+55 (21) 9 9999-9992",
    };
    const newStore_3 = {
      name: "Loja 3",
      address: "Rua exemplo 003",
      phone: "+55 (21) 9 9999-9993",
    };

    await createStoreUseCase.execute(newStore_1);
    await createStoreUseCase.execute(newStore_2);
    await createStoreUseCase.execute(newStore_3);

    const newProduct = {
      name: "Produto 1",
      price: 9.99,
      cost: 4.99,
      status: ProductStatus.active,
      category: "Vestuário",
    };

    await createProductUseCase.execute(newProduct);

    const ListInventoriesResponse = await listInventoriesUseCase.execute();

    expect(ListInventoriesResponse.inventories).toHaveLength(3);
  });
});
