import { StoreNotFound } from "../useCases/errors/store-not-found.js";
import { makeDeleteStoreUseCase } from "../useCases/factories/make-delete-store-use-case.js";
import { z } from "zod";

export async function deleteStoreController(req, res) {
  const storeSchema = z.object({
    id: z.string().uuid(),
  });

  const { id } = storeSchema.parse(req.params);
  const deleteStoreUseCase = new makeDeleteStoreUseCase();

  try {
    const store = await deleteStoreUseCase.execute(id);
    return res.status(200).send(store);
  } catch (error) {
    if (error instanceof StoreNotFound) {
      return res.status(400).send({ message: error.message });
    } else {
      throw error;
    }
  }
}
