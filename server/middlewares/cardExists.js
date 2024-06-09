import Card from "../models/cardModel.js";

const cardExists = async (req, res, next) => {
    const cardId = req.params.cardId;

    const response = await Card.findOne({_id: cardId});

    if(!response){
        return res.status(400).json({
            msg: "Card does not exist"
        });
    }

    return next();
}

export default cardExists;
