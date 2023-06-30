import { makeCreateStoreUseCase } from "../useCases/factories/make-create-store-use-case.js";
import { z } from "zod";

export async function createStoreController(req, res) {
  const storeSchema = z.object({
    name: z.string(),
    address: z.string(),
    phone: z.string(),
  });

  const { name, address, phone } = storeSchema.parse(req.body);

  const createStoreUseCase = new makeCreateStoreUseCase();

  const store = await createStoreUseCase.execute({ name, address, phone });
  return res.status(200).send(store);
}
