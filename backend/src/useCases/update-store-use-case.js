import { StoreNotFound } from "./errors/store-not-found.js";

export class UpdateStoreUseCase {
  constructor(storesRepository) {
    this.storesRepository = storesRepository;
  }

  async execute(id, data) {
    // Validate if store exists
    const storeWithSameId = await this.storesRepository.findById(id);
    if (!storeWithSameId) {
      throw new StoreNotFound();
    }

    // Update store
    const store = await this.storesRepository.update(id, data);

    return { store };
  }
}
