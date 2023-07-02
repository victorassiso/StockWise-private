import { ProductAlreadyExists } from "../useCases/errors/product-already-exists.js";
import { makeCreateProductUseCase } from "../useCases/factories/make-create-product-use-case.js";
import { z } from "zod";

export async function createProductController(req, res) {
  const productSchema = z.object({
    name: z.string(),
    price: z.number(),
    cost: z.number(),
    status: z.enum(["active", "inactive"]).optional(),
    category: z.string(),
  });

  const { name, price, cost, status, category } = productSchema.parse(req.body);

  const createProductUseCase = new makeCreateProductUseCase();
  try {
    const product = await createProductUseCase.execute({
      name,
      price,
      cost,
      status,
      category,
    });
    return res.status(201).send(product);
  } catch (error) {
    if (error instanceof ProductAlreadyExists) {
      return res.status(409).send({ message: error.message });
    } else {
      throw error;
    }
  }
}
