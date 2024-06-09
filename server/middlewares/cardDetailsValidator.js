import zod from "zod";

const cardDetailsSchema = zod.object({
    name: zod.string({message: "Name is required and should be a string"}).max(100, {message: "Maximum length for Name is 100"}),
    description: zod.string({message: "Description is required and should be a string"}).max(500, {message: "Maximum length for Description is 500"}),
    imageUrl: zod.string({message: "ImageUrl is required"}).url({message: "Invalid Url for Image"}),
    hobbies: zod.array(zod.string().max(100,{message: "Maximum length for hobbies is 100"})),
})

const cardDetailsValidator = (req, res, next) => {
    const body = req.body;

    if(!cardDetailsSchema.safeParse(body).success){
        return res.status(400).json({
            msg: cardDetailsSchema.safeParse(body).error.issues[0].message
        });
    }

    return next();
}

export default cardDetailsValidator;
