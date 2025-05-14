import dotenv from "dotenv";
dotenv.config();

import express from "express";
import { Config } from "./config/config.js";
import { DataRouter } from "./routers/dataRouter.js";
import { libroRouter } from "./routers/libroRouter.js";

const app = express();

app.use(express.json());

app.use("/api", libroRouter);
app.use("/api", DataRouter);
app.use((req, res) => {
	res.status(404).json({
		error: "Ruta no encontrada",
		path: req.originalUrl,
		method: req.method,
	});
});

app.listen(Config.PORT, () => {
	console.log(`The server is running on http://${Config.HOST}:${Config.PORT}`);
});
