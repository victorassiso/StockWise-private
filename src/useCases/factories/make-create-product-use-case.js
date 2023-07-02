import { PrismaProductsRepository } from "../../repository/prisma/prisma-products-repository.js";
import { PrismaStoresRepository } from "../../repository/prisma/prisma-stores-repository.js";
import { PrismaInventoriesRepository } from "../../repository/prisma/prisma-inventories-repository.js";
import { CreateProductUseCase } from "../create-product-use-case.js";

export function makeCreateProductUseCase() {
  const productsRepository = new PrismaProductsRepository();
  const storesRepository = new PrismaStoresRepository();
  const InventoriesRepository = new PrismaInventoriesRepository();
  const createProductUseCase = new CreateProductUseCase(
    productsRepository,
    storesRepository,
    InventoriesRepository
  );

  return createProductUseCase;
}
