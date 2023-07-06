import { ProductNotFound } from "./errors/product-not-found.js";

export class UpdateProductUseCase {
  constructor(productsRepository) {
    this.productsRepository = productsRepository;
  }

  async execute(id, data) {
    // Validate if product exists
    const productWithSameId = await this.productsRepository.findById(id);
    if (!productWithSameId) {
      throw new ProductNotFound();
    }

    // Update product
    const product = await this.productsRepository.update(id, data);

    return { product };
  }
}
