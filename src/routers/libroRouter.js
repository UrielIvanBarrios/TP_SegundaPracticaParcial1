import { Router } from "express";
import { LibroController } from "../controllers/libroController.js";

const libroRouter = Router();

libroRouter.get("/json_file", LibroController);

libroRouter.get("/book/:id",LibroController);

libroRouter.post("/book",LibroController);

libroRouter.put("/book/:id",LibroController);

libroRouter.delete("/book/:id",LibroController);


export {libroRouter}