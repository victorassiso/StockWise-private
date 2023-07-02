import { StoreAlreadyExists } from "./errors/store-already-exists.js";

export class CreateStoreUseCase {
  constructor(storesRepository, productsRepository, inventoriesRepository) {
    this.storesRepository = storesRepository;
    this.productsRepository = productsRepository;
    this.inventoriesRepository = inventoriesRepository;
  }

  async execute(data) {
    // Validate if name already exists
    const storeWithSameName = await this.storesRepository.findByName(data.name);
    if (storeWithSameName) {
      throw new StoreAlreadyExists();
    }

    // Create store
    const store = await this.storesRepository.create(data);

    // Fetch all products
    const products = await this.productsRepository.list();

    // For each product
    for (let i = 0; i < products.length; i++) {
      // Create the store inventory
      await this.inventoriesRepository.create({
        store_id: store.id,
        product_id: products[i].id,
      });
    }

    return { store };
  }
}
