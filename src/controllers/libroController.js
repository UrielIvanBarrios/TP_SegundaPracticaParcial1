import { LibroService } from "../service/libroService.js";

export const LibroController = {
	traerLibros: async (req, res) => {
		try {
			const db = await LibroService.traerLibros();
			res.status(200).json({
				status: "Successful",
				message: "Database traida con exito",
				payload: db,
			});
		} catch (error) {
			res.status(404).json({
				status: "not found",
				message: error.message,
				payload: [],
			});
		}
	},
};
