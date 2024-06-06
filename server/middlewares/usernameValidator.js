import zod from "zod";

const usernameSchema = zod.object({
    username: zod.string().max(20)
});

const usernameValidator = (req, res, next) => {
    const data = req.body;
    if(!usernameSchema.safeParse({username: data.username}).success){
        return res.status(400).json({
            msg: "Username does not follow the correct format"
        });
    }

    return next();
}

export default usernameValidator;
