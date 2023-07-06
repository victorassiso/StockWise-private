import { ProductNotFound } from "./errors/product-not-found.js";

export class DeleteProductUseCase {
  constructor(productsRepository, inventoriesRepository) {
    this.productsRepository = productsRepository;
    this.inventoriesRepository = inventoriesRepository;
  }

  async execute(id) {
    // Validate if product exists
    const productWithSameId = await this.productsRepository.findById(id);
    if (!productWithSameId) {
      throw new ProductNotFound();
    }

    // Delete product inventories
    await this.inventoriesRepository.deleteInventoriesByProduct(id);

    // Delete product
    const product = await this.productsRepository.delete(id);

    return { product };
  }
}
