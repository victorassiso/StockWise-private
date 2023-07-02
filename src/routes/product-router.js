import { createProductController } from "../controllers/create-product-controller.js";
import { listProductsController } from "../controllers/list-products-controller.js";
import express from "express";

export const productRouter = express.Router();

productRouter.post("/", createProductController);
productRouter.get("/", listProductsController);
