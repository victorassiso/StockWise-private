import { PrismaStoresRepository } from "../../repository/prisma/prisma-stores-repository.js";
import { CreateStoreUseCase } from "../create-store-use-case.js";

export function makeCreateStoreUseCase() {
  const storesRepository = new PrismaStoresRepository();
  const createStoreUseCases = new CreateStoreUseCase(storesRepository);

  return createStoreUseCases;
}
