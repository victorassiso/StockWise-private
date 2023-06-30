import { prisma } from "../../../prisma/prisma-client.js";
export class PrismaStoresRepository {
  async create(data) {
    const store = await prisma.store.create({
      data,
    });
    return store;
  }

  async list() {
    const stores = await prisma.store.findMany();
    return stores;
  }
}
