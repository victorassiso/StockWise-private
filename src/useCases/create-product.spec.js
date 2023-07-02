import { beforeEach, describe, expect, it, test } from "vitest";
import { InMemoryProductsRepository } from "../repository/in-memory/in-memory-products-repository";
import { CreateProductUseCase } from "../useCases/create-product-use-case";
import { ProductAlreadyExists } from "../useCases/errors/product-already-exists";
import { ProductStatus } from "@prisma/client";

let productsRepository;
let createProductUseCase;

describe("Product Use Cases", () => {
  beforeEach(() => {
    productsRepository = new InMemoryProductsRepository();
    createProductUseCase = new CreateProductUseCase(productsRepository);
  });

  it("should be able to create new products", async () => {
    const newProduct = {
      name: "Produto 1",
      price: 9.99,
      cost: 4.99,
      status: ProductStatus.active,
      category: "Vestuário",
    };

    const res = await createProductUseCase.execute(newProduct);

    expect(res.product).toContain(newProduct);
  });

  it("should not be able to create multiple products with the same name", async () => {
    const newProduct = {
      name: "Produto 1",
      price: 9.99,
      cost: 4.99,
      status: ProductStatus.active,
      category: "Vestuário",
    };

    await createProductUseCase.execute(newProduct);

    await expect(async () => {
      await createProductUseCase.execute(newProduct);
    }).rejects.toBeInstanceOf(ProductAlreadyExists);
  });
});
