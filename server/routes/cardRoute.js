import {Router} from "express";
import cardDetailsValidator from "../middlewares/cardDetailsValidator.js";
import userAuthorization from "../middlewares/userAuthorization.js";
import Card from "../models/cardModel.js";
import maxCardLimit from "../middlewares/maxCardLimit.js";
import cardExists from "../middlewares/cardExists.js";
import updateCardDetailsValidator from "../middlewares/updateCardDetailsValidator.js";
import jwt from "jsonwebtoken";
import User from "../models/userModel.js";

const route = Router();

route.post("/create-card", cardDetailsValidator, userAuthorization, maxCardLimit, async (req,res)=>{
    const body = req.body;
    body.userId = req.user._id;

    const response = await Card.create(body);

    if(!response){
        return res.status(400).json({
            msg: "Internal Server Error"
        });
    }

    return res.status(200).json({
        msg: "Card Created Successfully"
    });
})

route.put("/update-card/:cardId", updateCardDetailsValidator, userAuthorization, cardExists, async (req,res)=>{
    const cardId = req.params.cardId;
    const body = req.body;

    const response = await Card.findOneAndUpdate({_id: cardId}, body);

    if(!response){
        return res.status(404).json({
            msg: "Internal Server Error"
        })
    }

    return res.status(200).json({
        msg: "Card updated successfully"
    });
})

route.delete("/delete-card/:cardId",userAuthorization, cardExists, async (req,res)=>{
    const cardId = req.params.cardId;

    const response = await Card.findOneAndDelete({_id: cardId});

    if(!response){
        return res.status(404).json({
            msg: "Internal Server Error"
        });
    }

    return res.status(200).json({
        msg: "Card deleted Successfully"
    });
})

route.get("/card", userAuthorization, async(req, res)=>{
    const token = req.headers.authorization;
    const signature = token.split(" ")[1];

    const jsonData = jwt.decode(signature);
    const userData = await User.findOne({email: jsonData.email});

    if(!userData){
        return res.status(404).json({
            msg: "User does not exist"
        });
    }

    const card = await Card.find({userId: userData._id});

    if(!card){
        return res.status(204).json({
            msg: "Card Does Not exist"
        })
    }

    return res.status(200).json({
        cards: card
    })
})

route.get("/card/:cardId", cardExists, async (req,res)=>{
    const cardId = req.params.cardId;

    const response = await Card.findOne({_id: cardId});

    if(!response){
        res.status(404).json({
            msg: "Internal Server Error"
        });
    }

    return res.status(200).json(response);
})

export default {route};
