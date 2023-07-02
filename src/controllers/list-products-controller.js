import { makeListProductsUseCase } from "../useCases/factories/make-list-products-use-case.js";

export async function listProductsController(req, res) {
  const ListProductsUseCase = new makeListProductsUseCase();
  const products = await ListProductsUseCase.execute();

  return res.status(200).send(products);
}
