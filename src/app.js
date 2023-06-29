import express from "express";
import { storeRouter } from "./routes/store-router.js";

export const app = express();
app.use(express.json());

app.use("/stores", storeRouter);
