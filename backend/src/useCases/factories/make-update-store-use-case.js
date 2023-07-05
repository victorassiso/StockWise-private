import { PrismaStoresRepository } from "../../repository/prisma/prisma-stores-repository.js";
import { UpdateStoreUseCase } from "../update-store-use-case.js";
export function makeUpdateStoreUseCase() {
  const storesRepository = new PrismaStoresRepository();
  const updateStoreUseCase = new UpdateStoreUseCase(storesRepository);

  return updateStoreUseCase;
}
