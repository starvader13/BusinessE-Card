import connectDatabase from "../config/connection.js";
import logger from "./logger.js";

const startDatabase = async () => {
    const response = await connectDatabase();
    await logger(response)
}

export default startDatabase;
