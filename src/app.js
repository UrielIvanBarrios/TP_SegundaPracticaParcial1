import dotenv from "dotenv";
dotenv.config();

import express from "express";
import { Config } from "./config/config.js";
import { libroRouter } from "./routers/libroRouter.js";


const app = express();

app.use(express.json());

app.use("/api",libroRouter);

app.listen(Config.PORT, () => {
    console.log(`The server is running on http://${Config.HOST}:${Config.PORT}`);
})