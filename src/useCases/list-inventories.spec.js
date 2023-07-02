import { beforeEach, describe, expect, it, test } from "vitest";
import { InMemoryInventoriesRepository } from "../repository/in-memory/in-memory-inventories-repository.js";
import { ListInventoriesUseCase } from "../useCases/list-inventories-use-case.js";

let inventoriesRepository;
let listInventoriesUseCase;

describe("List Inventories Use Case", () => {
  beforeEach(() => {
    inventoriesRepository = new InMemoryInventoriesRepository();
    listInventoriesUseCase = new ListInventoriesUseCase(inventoriesRepository);
  });

  it("should be able to list all inventories", async () => {
    const newInventory = {
      store_id: "store_id",
      product_id: "product_id",
    };

    const createInventoryResponse = {
      inventory: await inventoriesRepository.create(newInventory),
    };
    const listInventoryResponse = await listInventoriesUseCase.execute();

    expect(listInventoryResponse.inventories).toContain(
      createInventoryResponse.inventory
    );
  });
});
