import jwt from "jsonwebtoken"
import dotenv from "dotenv";
import logger from "../utils/logger.js";
dotenv.config();

const secretKey = process.env.JWT_SECRET_KEY;

const userAuthorization = async (req, res, next) => {
    const token = req.headers.authorization;
    const signature = token.split(" ")[1];

    try{
        await jwt.verify(signature, secretKey);
        next();
    }catch(err){
        await logger({
            origin: "card",
            msg: err.msg,
            timestamp: Date(),
        });

        return res.status(401).json({
            msg: "Please Sign-In Again",
            error: err.msg
        });

    }
}

export default userAuthorization;
