import express from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();
import startDatabase from "./utils/startDatabase.js";
import bodyParser from "body-parser";
import signRoutes from "./routes/signRoutes.js";
import cardRoutes from "./routes/cardRoute.js";

const app = express();
const port = process.env.PORT || 7000;

app.use(cors({
    origin: "http://localhost:5173"
}));

app.use(bodyParser.json());

app.use("/api", signRoutes.route);
app.use("/api", cardRoutes.route);

app.listen(port, async ()=>{
    console.log(`Server is listening at PORT ${port}`);
    await startDatabase();
});
