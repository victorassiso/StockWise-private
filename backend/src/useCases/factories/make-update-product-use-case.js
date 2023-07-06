import { PrismaProductsRepository } from "../../repository/prisma/prisma-products-repository.js";
import { UpdateProductUseCase } from "../update-product-use-case.js";

export function makeUpdateProductUseCase() {
  const productsRepository = new PrismaProductsRepository();
  const updateProductUseCase = new UpdateProductUseCase(productsRepository);

  return updateProductUseCase;
}
