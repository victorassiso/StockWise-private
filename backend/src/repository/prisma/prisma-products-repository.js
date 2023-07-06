import { prisma } from "../../../prisma/prisma-client.js";
export class PrismaProductsRepository {
  async create(data) {
    const product = await prisma.product.create({
      data,
    });
    return product;
  }

  async list() {
    const products = await prisma.product.findMany();
    return products;
  }

  async findByName(name) {
    const product = await prisma.product.findUnique({
      where: {
        name,
      },
    });

    return product;
  }

  async findById(id) {
    const product = await prisma.product.findUnique({
      where: {
        id,
      },
    });

    return product;
  }

  async update(id, data) {
    const product = await prisma.product.update({
      where: {
        id,
      },
      data,
    });

    return product;
  }

  async delete(id) {
    const product = await prisma.product.delete({
      where: {
        id,
      },
    });

    return product;
  }
}
