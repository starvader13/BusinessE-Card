import logger from "../utils/logger.js";

const parameterValidator = async (req, res, next) => {
    const body = req.body;
    const length = Object.keys(body).length;

    if(length===3 || length===2){
        return next();
    }

    await logger({
        origin: "sign",
        msg: "Accessing Sign Logic with Bad Number Of Object Parameters",
        timestamp: Date()
    });

    return res.status(400).json({
        msg: "Request with Bad Parameters for Sign Route"
    })
}

export default parameterValidator;
