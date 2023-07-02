import express from "express";
import { storeRouter } from "./routes/store-router.js";
import { errorHandler } from "./middlewares/error-handler.js";
import { productRouter } from "./routes/product-router.js";

export const app = express();

// Configs
app.use(express.json());

// Routes
app.use("/stores", storeRouter);
app.use("/products", productRouter);

// Middlewares
app.use(errorHandler);
