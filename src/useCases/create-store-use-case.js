export class CreateStoreUseCase {
  constructor(storesRepository) {
    this.storesRepository = storesRepository;
  }

  async execute(data) {
    const store = await this.storesRepository.create(data);

    return { store };
  }
}
