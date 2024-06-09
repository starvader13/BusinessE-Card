import jwt from "jsonwebtoken";
import User from "../models/userModel.js";
import Card from "../models/cardModel.js";

const maxCardLimit = async (req, res, next) => {
    const token = req.headers.authorization;
    const signature = token.split(" ")[1];

    const jsonData = jwt.decode(signature);
    const userData = await User.findOne({email: jsonData.email});
    req.user = userData;

    const card = await Card.find({userId: userData._id});

    if(card.length>=5){
        return res.status(403).json({
            msg: "Max limit reached for creating Card"
        });
    }

    return next();
}

export default maxCardLimit;
