import User from "../models/userModel.js";

const checkUserDoesNotExists = async (req, res, next) => {
    const {email} = req.body;

    const data = await User.findOne({email: email});
    if(data){
        return res.status(409).json({
            msg: "User Already Exists. Please SignIn"
        });
    }

    return next();
}

export default checkUserDoesNotExists;
