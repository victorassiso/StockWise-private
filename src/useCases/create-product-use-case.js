import { ProductAlreadyExists } from "./errors/product-already-exists.js";

export class CreateProductUseCase {
  constructor(productsRepository) {
    this.productsRepository = productsRepository;
  }

  async execute(data) {
    const productWithSameName = await this.productsRepository.findByName(
      data.name
    );
    if (productWithSameName) {
      throw new ProductAlreadyExists();
    }

    const product = await this.productsRepository.create(data);

    return { product };
  }
}
