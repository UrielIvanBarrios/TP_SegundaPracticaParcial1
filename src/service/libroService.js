import { JsonRepository } from "../repository/jsonRepository.js";

const LibroRepository = new JsonRepository("../db/libroDb.json");

export const LibroService = {
	traerLibros: async () => {
		return await LibroRepository.getAll();
	},
};
