import { PrismaInventoriesRepository } from "../../repository/prisma/prisma-inventories-repository.js";
import { PrismaStoresRepository } from "../../repository/prisma/prisma-stores-repository.js";
import { DeleteStoreUseCase } from "../delete-store-use-case.js";

export function makeDeleteStoreUseCase() {
  const storesRepository = new PrismaStoresRepository();
  const inventoriesRepository = new PrismaInventoriesRepository();
  const deleteStoreUseCase = new DeleteStoreUseCase(
    storesRepository,
    inventoriesRepository
  );

  return deleteStoreUseCase;
}
