import { createStoreController } from "../controllers/create-store-controller.js";
import { deleteStoreController } from "../controllers/delete-store-controller.js";
import { listStoresController } from "../controllers/list-stores-controller.js";
import { updateStoreController } from "../controllers/update-store-controller.js";
import express from "express";

export const storeRouter = express.Router();

storeRouter.post("/", createStoreController);
storeRouter.get("/", listStoresController);
storeRouter.delete("/:id", deleteStoreController);
storeRouter.put("/:id", updateStoreController);
