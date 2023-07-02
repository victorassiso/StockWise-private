import { beforeEach, describe, expect, it, test } from "vitest";
import { InMemoryStoresRepository } from "../repository/in-memory/in-memory-stores-repository";
import { CreateStoreUseCase } from "../useCases/create-store-use-case";
import { StoreAlreadyExists } from "../useCases/errors/store-already-exists";

let storesRepository;
let createStoreUseCase;

describe("Store Use Cases", () => {
  beforeEach(() => {
    storesRepository = new InMemoryStoresRepository();
    createStoreUseCase = new CreateStoreUseCase(storesRepository);
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
});
