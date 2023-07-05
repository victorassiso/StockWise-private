import { prisma } from "../../../prisma/prisma-client.js";
export class PrismaInventoriesRepository {
  async create(data) {
    const inventory = await prisma.Inventory.create({
      data,
    });
    return inventory;
  }

  async list() {
    const inventories = await prisma.Inventory.findMany();
    return inventories;
  }

  async deleteInventoriesByStore(store_id) {
    const inventories = await prisma.Inventory.deleteMany({
      where: { store_id },
    });
    return inventories;
  }
}
