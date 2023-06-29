import { makeListStoresUseCase } from "../useCases/factories/make-list-stores-use-case.js";

export async function listStoresController(req, res) {
  console.log("List Stores Controller...");
  const ListStoresUseCase = new makeListStoresUseCase();
  console.log("Debug");
  const stores = await ListStoresUseCase.execute();
  console.log("End");
  return res.status(200).send(stores);
}
