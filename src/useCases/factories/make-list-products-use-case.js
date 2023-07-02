import { PrismaProductsRepository } from "../../repository/prisma/prisma-products-repository.js";
import { ListProductsUseCase } from "../list-products-use-case.js";

export function makeListProductsUseCase() {
  const productsRepository = new PrismaProductsRepository();
  const listProductsUseCase = new ListProductsUseCase(productsRepository);

  return listProductsUseCase;
}
