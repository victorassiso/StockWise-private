export class ListFormatedInventoriesUseCase {
  constructor(inventoriesRepository) {
    this.inventoriesRepository = inventoriesRepository;
  }

  async execute() {
    const inventories = await this.inventoriesRepository.listFormated();

    return { inventories };
  }
}
