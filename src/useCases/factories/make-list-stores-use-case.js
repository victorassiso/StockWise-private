import { PrismaStoresRepository } from "../../repository/prisma/prisma-stores-repository.js";
import { ListStoresUseCase } from "../list-stores-use-case.js";

export function makeListStoresUseCase() {
  const storesRepository = new PrismaStoresRepository();
  const listStoresUseCase = new ListStoresUseCase(storesRepository);

  return listStoresUseCase;
}
