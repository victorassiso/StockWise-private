import { createStoreController } from "../controllers/create-store-controller.js";
import { listStoresController } from "../controllers/list-stores-controller.js";
import express from "express";

export const storeRouter = express.Router();

storeRouter.post("/", createStoreController);
storeRouter.get("/", listStoresController);
