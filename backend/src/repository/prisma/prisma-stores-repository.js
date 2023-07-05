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

  async findByName(name) {
    const store = await prisma.store.findUnique({
      where: {
        name,
      },
    });

    return store;
  }

  async findById(id) {
    const store = await prisma.store.findUnique({
      where: {
        id,
      },
    });

    return store;
  }

  async delete(id) {
    const store = await prisma.store.delete({
      where: { id },
    });
    return store;
  }
}
