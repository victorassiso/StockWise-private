import { ProductNotFound } from "../useCases/errors/product-not-found.js";
import { makeUpdateProductUseCase } from "../useCases/factories/make-update-product-use-case.js";
import { z } from "zod";

export async function updateProductController(req, res) {
  const productBodySchema = z.object({
    name: z.string().optional(),
    cost: z.number().optional(),
    price: z.number().optional(),
    status: z.enum(["active", "inactive"]).optional(),
    category: z.string().optional(),
  });
  const productParamsSchema = z.object({
    id: z.string().uuid(),
  });
  const { name, cost, price, status, category } = productBodySchema.parse(
    req.body
  );
  const { id } = productParamsSchema.parse(req.params);
  const updateProductUseCase = new makeUpdateProductUseCase();
  const data = { name, cost, price, status, category };

  try {
    const product = await updateProductUseCase.execute(id, data);
    return res.status(200).send(product);
  } catch (error) {
    if (error instanceof ProductNotFound) {
      return res.status(400).send({ message: error.message });
    } else {
      throw error;
    }
  }
}
