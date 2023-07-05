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

  async findById(id) {
    const store = this.stores.find((store) => store.id === id);
    if (!store) {
      return null;
    }
    return store;
  }

  async delete(id) {
    const storeIndex = this.stores.findIndex((store) => store.id === id);
    if (!storeIndex) {
      return null;
    }
    const store = this.stores.splice(storeIndex, 1);
    return store;
  }
}
