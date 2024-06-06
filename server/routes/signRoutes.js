import {Router} from "express";
import emailPasswordValidator from "../middlewares/emailPasswordValidatior.js";
import usernameValidator from "../middlewares/usernameValidator.js";
import parameterValidator from "../middlewares/parameterValidator.js";
import checkUserDoesNotExists from "../middlewares/checkUserDoesNotExists.js";
import User from "../models/userModel.js";
import bcrypt from "bcrypt";
import checkUserExists from "../middlewares/checkUserExists.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config()

const route = Router();
const secretKey = process.env.JWT_SECRET_KEY

route.post("/signup", parameterValidator, emailPasswordValidator, usernameValidator, checkUserDoesNotExists, async (req, res)=>{
    const body = req.body;

    const salt = bcrypt.genSaltSync(10);
    body.password = bcrypt.hashSync(body.password, salt);

    const response = await User.create(body);

    if(!response){
        return res.status(404).json({
            msg: "User Creation Failed due to Internal Server Error."
        });
    }

    return res.status(201).json({
        msg: "User Create Successfully"
    });
})

route.post("/signin", parameterValidator, emailPasswordValidator, checkUserExists, async (req, res)=>{
    const body = req.body;

    const data = await User.findOne({email: body.email});
    const compare = bcrypt.compareSync(body.password, data.password);

    if(!compare){
        return res.status(401).json({
            msg: "Either the Email or the Password is incorrect"
        });
    }

    const signature = jwt.sign({username: data.username, email: data.email}, secretKey, { expiresIn: 6*(60 * 60)});
    const token = "Bearer " + signature;

    return res.status(200).json({
        msg: `User Signed In Successfully.  Welcome ${data.username}`,
        token: token
    });
})

export default {route};
