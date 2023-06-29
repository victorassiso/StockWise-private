import { PrismaStoresRepository } from "./prisma/prisma-stores-repository.js";

export function makeStoresRepository() {
  const storesRepository = new PrismaStoresRepository();
  return storesRepository;
}
