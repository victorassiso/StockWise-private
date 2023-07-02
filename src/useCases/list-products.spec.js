import { beforeEach, describe, expect, it, test } from "vitest";
import { InMemoryProductsRepository } from "../repository/in-memory/in-memory-products-repository";
import { InMemoryStoresRepository } from "../repository/in-memory/in-memory-stores-repository";
import { InMemoryInventoriesRepository } from "../repository/in-memory/in-memory-inventories-repository";
import { CreateProductUseCase } from "../useCases/create-product-use-case";
import { ListProductsUseCase } from "../useCases/list-products-use-case";

let productsRepository;
let storesRepository;
let inventoriesRepository;

let createProductUseCase;
let listProductsUseCase;

describe("List Products Use Case", () => {
  beforeEach(() => {
    productsRepository = new InMemoryProductsRepository();
    storesRepository = new InMemoryStoresRepository();
    inventoriesRepository = new InMemoryInventoriesRepository();

    createProductUseCase = new CreateProductUseCase(
      productsRepository,
      storesRepository,
      inventoriesRepository
    );
    listProductsUseCase = new ListProductsUseCase(productsRepository);
  });

  it("should be able to list all products", async () => {
    const newProduct = {
      name: "Loja 1",
      address: "Rua exemplo 000",
      phone: "+55 (21) 9 9999-9999",
    };

    const createProductResponse = await createProductUseCase.execute(
      newProduct
    );
    const listProductResponse = await listProductsUseCase.execute();

    expect(listProductResponse.products).toContain(
      createProductResponse.product
    );
  });
});
