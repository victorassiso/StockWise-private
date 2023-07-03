import { ProductAlreadyExists } from "./errors/product-already-exists.js";

export class CreateProductUseCase {
  constructor(productsRepository, storesRepository, inventoriesRepository) {
    this.productsRepository = productsRepository;
    this.storesRepository = storesRepository;
    this.inventoriesRepository = inventoriesRepository;
  }

  async execute(data) {
    // Validate if product name already exists
    const productWithSameName = await this.productsRepository.findByName(
      data.name
    );
    if (productWithSameName) {
      throw new ProductAlreadyExists();
    }

    // Create product
    const product = await this.productsRepository.create(data);

    // Fetch all stores
    const stores = await this.storesRepository.list();

    // For each store
    for (let i = 0; i < stores.length; i++) {
      // Create the product inventory
      await this.inventoriesRepository.create({
        product_id: product.id,
        store_id: stores[i].id,
      });
    }

    return { product };
  }
}
