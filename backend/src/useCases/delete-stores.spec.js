import { beforeEach, describe, expect, it, test } from "vitest";
import { ProductStatus } from "@prisma/client";

import { InMemoryStoresRepository } from "../repository/in-memory/in-memory-stores-repository";
import { InMemoryProductsRepository } from "../repository/in-memory/in-memory-products-repository";
import { InMemoryInventoriesRepository } from "../repository/in-memory/in-memory-inventories-repository";

import { CreateStoreUseCase } from "../useCases/create-store-use-case";
import { CreateProductUseCase } from "../useCases/create-product-use-case";
import { DeleteStoreUseCase } from "../useCases/delete-store-use-case";

let storesRepository;
let productsRepository;
let inventoriesRepository;

let createStoreUseCase;
let deleteStoreUseCase;
let createProductUseCase;
let listInventoriesUseCase;

describe("Delete Store Use Case", () => {
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
    deleteStoreUseCase = new DeleteStoreUseCase(
      storesRepository,
      inventoriesRepository
    );
  });

  it("should be able to delete all the inventories of a store", async () => {
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

    const createStoreResponse = await createStoreUseCase.execute(newStore);

    const deleteStore = await deleteStoreUseCase.execute(
      createStoreResponse.store.id
    );
  });
});
