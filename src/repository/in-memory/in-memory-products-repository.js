export class InMemoryProductsRepository {
  products = [];

  async create(data) {
    const product = {
      id: "product-1",
      name: data.name,
      price: data.price,
      cost: data.cost,
      status: data.status,
      category: data.category,
      created_at: new Date(),
      updated_at: new Date(),
    };

    this.products.push(product);

    return product;
  }

  async list() {
    return this.products;
  }

  async findByName(name) {
    const product = this.products.find((product) => product.name === name);
    if (!product) {
      return null;
    }
    return product;
  }
}
