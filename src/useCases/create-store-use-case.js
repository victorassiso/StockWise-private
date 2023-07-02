import { StoreAlreadyExists } from "./errors/store-already-exists.js";

export class CreateStoreUseCase {
  constructor(storesRepository) {
    this.storesRepository = storesRepository;
  }

  async execute(data) {
    const storeWithSameName = await this.storesRepository.findByName(data.name);
    if (storeWithSameName) {
      throw new StoreAlreadyExists();
    }

    const store = await this.storesRepository.create(data);

    return { store };
  }
}
