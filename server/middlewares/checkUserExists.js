import User from "../models/userModel.js";

const checkUserExists = async (req, res, next) => {
    const {email} = req.body;

    const data = await User.findOne({email: email});
    if(!data){
        return res.status(409).json({
            msg: "User doesn't Exists. Please SignUp"
        });
    }

    return next();
}

export default checkUserExists;
