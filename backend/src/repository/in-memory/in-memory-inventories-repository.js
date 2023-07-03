export class InMemoryInventoriesRepository {
  inventories = [];

  async create(data) {
    const inventory = {
      id: "inventory_id",
      store_id: data.store_id,
      product_id: data.product_id,
      balance: data.balance,
      created_at: new Date(),
      updated_at: new Date(),
    };

    this.inventories.push(inventory);

    return inventory;
  }

  async list() {
    return this.inventories;
  }
}
