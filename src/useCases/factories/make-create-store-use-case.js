import { makeStoresRepository } from "../../repository/make-stores-repository.js";
import { CreateStoreUseCase } from "../create-store-use-case.js";

export function makeCreateStoreUseCase() {
  const storesRepository = new makeStoresRepository();
  const createStoreUseCases = new CreateStoreUseCase(storesRepository);

  return createStoreUseCases;
}
