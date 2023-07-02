import { beforeEach, describe, expect, it, test } from "vitest";
import { InMemoryStoresRepository } from "../repository/in-memory/in-memory-stores-repository";
import { CreateStoreUseCase } from "../useCases/create-store-use-case";
import { ListStoresUseCase } from "../useCases/list-stores-use-case";

let storesRepository;
let productsRepository;
let inventoriesRepository;

let createStoreUseCase;
let listStoresUseCase;

describe("List Stores Use Case", () => {
  beforeEach(() => {
    storesRepository = new InMemoryStoresRepository();
    productsRepository = new InMemoryStoresRepository();
    inventoriesRepository = new InMemoryStoresRepository();

    createStoreUseCase = new CreateStoreUseCase(
      storesRepository,
      productsRepository,
      inventoriesRepository
    );
    listStoresUseCase = new ListStoresUseCase(storesRepository);
  });

  it("should be able to list all stores", async () => {
    const newStore = {
      name: "Loja 1",
      address: "Rua exemplo 000",
      phone: "+55 (21) 9 9999-9999",
    };

    const createStoreResponse = await createStoreUseCase.execute(newStore);
    const listStoreResponse = await listStoresUseCase.execute();

    expect(listStoreResponse.stores).toContain(createStoreResponse.store);
  });
});
