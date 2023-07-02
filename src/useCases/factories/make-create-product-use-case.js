import { PrismaProductsRepository } from "../../repository/prisma/prisma-products-repository.js";
import { CreateProductUseCase } from "../create-product-use-case.js";

export function makeCreateProductUseCase() {
  const productsRepository = new PrismaProductsRepository();
  const createProductUseCases = new CreateProductUseCase(productsRepository);

  return createProductUseCases;
}
