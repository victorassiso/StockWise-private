export class ListStoresUseCase {
  constructor(storesRepository) {
    this.storesRepository = storesRepository;
  }

  async execute() {
    const stores = await this.storesRepository.list();

    return { stores };
  }
}
