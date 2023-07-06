import { createProductController } from "../controllers/create-product-controller.js";
import { listProductsController } from "../controllers/list-products-controller.js";
import { updateProductController } from "../controllers/update-product-controller.js";
import { deleteProductController } from "../controllers/delete-product-controller.js";
import express from "express";

export const productRouter = express.Router();

productRouter.post("/", createProductController);
productRouter.get("/", listProductsController);
productRouter.put("/:id", updateProductController);
productRouter.delete("/:id", deleteProductController);
