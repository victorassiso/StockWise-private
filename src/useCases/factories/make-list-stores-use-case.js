import { makeStoresRepository } from "../../repository/make-stores-repository.js";
import { ListStoresUseCase } from "../list-stores-use-case.js";

export function makeListStoresUseCase() {
  const storesRepository = new makeStoresRepository();
  const listStoresUseCases = new ListStoresUseCase(storesRepository);

  return listStoresUseCases;
}
