export class ListInventoriesUseCase {
  constructor(inventoriesRepository) {
    this.inventoriesRepository = inventoriesRepository;
  }

  async execute() {
    const inventories = await this.inventoriesRepository.list();

    return { inventories };
  }
}
