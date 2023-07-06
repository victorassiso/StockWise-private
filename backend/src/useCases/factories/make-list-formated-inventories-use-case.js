import { PrismaInventoriesRepository } from "../../repository/prisma/prisma-inventories-repository.js";
import { ListFormatedInventoriesUseCase } from "../list-formated-inventories-use-case.js";

export function makeListFormatedInventoriesUseCase() {
  const inventoriesRepository = new PrismaInventoriesRepository();
  const listFormatedInventoriesUseCase = new ListFormatedInventoriesUseCase(
    inventoriesRepository
  );

  return listFormatedInventoriesUseCase;
}
