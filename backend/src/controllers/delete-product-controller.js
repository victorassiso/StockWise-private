import { ProductNotFound } from "../useCases/errors/product-not-found.js";
import { makeDeleteProductUseCase } from "../useCases/factories/make-delete-product-use-case.js";
import { z } from "zod";

export async function deleteProductController(req, res) {
  const productSchema = z.object({
    id: z.string().uuid(),
  });

  const { id } = productSchema.parse(req.params);
  const deleteProductUseCase = new makeDeleteProductUseCase();

  try {
    const product = await deleteProductUseCase.execute(id);
    return res.status(200).send(product);
  } catch (error) {
    if (error instanceof ProductNotFound) {
      return res.status(400).send({ message: error.message });
    } else {
      throw error;
    }
  }
}
