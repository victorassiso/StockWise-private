import { makeListFormatedInventoriesUseCase } from "../useCases/factories/make-list-formated-inventories-use-case.js";

export async function listFormatedInventoriesController(req, res) {
  const ListFormatedInventoriesUseCase =
    new makeListFormatedInventoriesUseCase();
  const formatedInventories = await ListFormatedInventoriesUseCase.execute();

  return res.status(200).send(formatedInventories);
}
