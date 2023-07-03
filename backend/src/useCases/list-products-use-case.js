export class ListProductsUseCase {
  constructor(productsRepository) {
    this.productsRepository = productsRepository;
  }

  async execute() {
    const products = await this.productsRepository.list();

    return { products };
  }
}
