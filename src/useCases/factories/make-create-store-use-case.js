import { PrismaInventoriesRepository } from "../../repository/prisma/prisma-inventories-repository.js";
import { PrismaProductsRepository } from "../../repository/prisma/prisma-products-repository.js";
import { PrismaStoresRepository } from "../../repository/prisma/prisma-stores-repository.js";
import { CreateStoreUseCase } from "../create-store-use-case.js";

export function makeCreateStoreUseCase() {
  const storesRepository = new PrismaStoresRepository();
  const inventoriesRepository = new PrismaInventoriesRepository();
  const productsRepository = new PrismaProductsRepository();
  const createStoreUseCases = new CreateStoreUseCase(
    storesRepository,
    productsRepository,
    inventoriesRepository
  );

  return createStoreUseCases;
}
