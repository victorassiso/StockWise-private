import express from "express";
import { storeRouter } from "./routes/store-router.js";
import { errorHandler } from "./middlewares/error-handler.js";

export const app = express();

// Configs
app.use(express.json());

// Routes
app.use("/stores", storeRouter);

// Middlewares
app.use(errorHandler);
