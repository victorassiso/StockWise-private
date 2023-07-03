import { makeListStoresUseCase } from "../useCases/factories/make-list-stores-use-case.js";

export async function listStoresController(req, res) {
  const ListStoresUseCase = new makeListStoresUseCase();
  const stores = await ListStoresUseCase.execute();

  return res.status(200).send(stores);
}
