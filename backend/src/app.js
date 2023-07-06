import express from "express";
import cors from "cors";
import { storeRouter } from "./routes/store-router.js";
import { errorHandler } from "./middlewares/error-handler.js";
import { productRouter } from "./routes/product-router.js";
import { inventoryRouter } from "./routes/inventory-routes.js";

export const app = express();

// Configs
app.use(cors());
app.use(express.json());

// Routes
app.use("/stores", storeRouter);
app.use("/products", productRouter);
app.use("/inventories", inventoryRouter);

// Middlewares
app.use(errorHandler);
