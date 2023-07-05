import { StoreNotFound } from "./errors/store-not-found.js";

export class DeleteStoreUseCase {
  constructor(storesRepository, inventoriesRepository) {
    this.storesRepository = storesRepository;
    this.inventoriesRepository = inventoriesRepository;
  }

  async execute(id) {
    console.log(id);
    // Validate if store exists
    const storeWithSameId = await this.storesRepository.findById(id);
    if (!storeWithSameId) {
      throw new StoreNotFound();
    }

    // Delete store inventories
    await this.inventoriesRepository.deleteInventoriesByStore(id);

    // Delete store
    const store = await this.storesRepository.delete(id);

    return { store };
  }
}
