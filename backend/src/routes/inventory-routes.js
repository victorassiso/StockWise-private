import { listFormatedInventoriesController } from "../controllers/list-formated-inventories-controller.js";
import express from "express";

export const inventoryRouter = express.Router();

inventoryRouter.get("/", listFormatedInventoriesController);
