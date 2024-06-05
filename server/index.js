import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import startDatabase from "./utils/startDatabase.js";
dotenv.config();

const app = express();
const port = process.env.PORT || 7000;

app.use(cors({
    origin: "http://localhost:5173/"
}));

app.listen(port, async ()=>{
    console.log(`Server is listening at PORT ${port}`);
    await startDatabase();
});
