export class InMemoryStoresRepository {
  stores = [];

  async create(data) {
    const store = {
      id: "store-1",
      name: data.name,
      address: data.address,
      phone: data.phone,
      created_at: new Date(),
      updated_at: new Date(),
    };

    this.stores.push(store);

    return store;
  }

  async list() {
    return this.stores;
  }

  async findByName(name) {
    const store = this.stores.find((store) => store.name === name);
    if (!store) {
      return null;
    }
    return store;
  }
}
