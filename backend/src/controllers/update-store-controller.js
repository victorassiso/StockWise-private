import { StoreNotFound } from "../useCases/errors/store-not-found.js";
import { makeUpdateStoreUseCase } from "../useCases/factories/make-update-store-use-case.js";
import { z } from "zod";

export async function updateStoreController(req, res) {
  const storeBodySchema = z.object({
    name: z.string().optional(),
    address: z.string().optional(),
    phone: z.string().optional(),
  });
  const storeParamsSchema = z.object({
    id: z.string().uuid(),
  });
  const { name, address, phone } = storeBodySchema.parse(req.body);
  const { id } = storeParamsSchema.parse(req.params);
  const updateStoreUseCase = new makeUpdateStoreUseCase();
  const data = { name, address, phone };

  try {
    const store = await updateStoreUseCase.execute(id, data);
    return res.status(200).send(store);
  } catch (error) {
    if (error instanceof StoreNotFound) {
      return res.status(400).send({ message: error.message });
    } else {
      throw error;
    }
  }
}
