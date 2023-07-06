import { PrismaInventoriesRepository } from "../../repository/prisma/prisma-inventories-repository.js";
import { PrismaProductsRepository } from "../../repository/prisma/prisma-products-repository.js";
import { DeleteProductUseCase } from "../delete-product-use-case.js";

export function makeDeleteProductUseCase() {
  const productsRepository = new PrismaProductsRepository();
  const inventoriesRepository = new PrismaInventoriesRepository();
  const deleteProductUseCase = new DeleteProductUseCase(
    productsRepository,
    inventoriesRepository
  );

  return deleteProductUseCase;
}
