import { prisma } from "../../../prisma/prisma-client.js";
export class PrismaInventoriesRepository {
  async create(data) {
    const Inventory = await prisma.Inventory.create({
      data,
    });
    return Inventory;
  }

  async list() {
    const Inventories = await prisma.Inventory.findMany();
    return Inventories;
  }
}
