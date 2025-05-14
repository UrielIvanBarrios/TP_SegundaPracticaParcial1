import path from "node:path";
import { fileURLToPath } from "node:url";
import { JsonHandler } from "../utils/jsonHandler.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export class JsonRepository {
	constructor(dbPath) {
		this.dbPath = path.join(__dirname, `../db/${dbPath}`);
	}

	getAll = async () => {
		try {
			return await JsonHandler.read(this.dbPath);
		} catch (error) {
			throw new Error(
				`Error al traer desde la base de datos - ${error.message}`,
			);
		}
	};
}
