import zod from "zod";

const cardDetailsSchema = zod.object({
    name: zod.string({message: "Name is required and should be a string"}).max(50, {message: "Maximum length for Name is 50"}),
    description: zod.string({message: "Description is required and should be a string"}).max(200, {message: "Maximum length for Description is 200"}),
    imageUrl: zod.string({message: "ImageUrl is required"}).url({message: "Invalid Url for Image"}),
    hobbies: zod.array(zod.string().max(150,{message: "Maximum length for hobbies is 150"})),
    linkedin: zod.string().startsWith("https://www.linkedin.com/"),
    twitter: zod.string().startsWith("https://twitter.com/").or(zod.string().startsWith("https://x.com/"))
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
