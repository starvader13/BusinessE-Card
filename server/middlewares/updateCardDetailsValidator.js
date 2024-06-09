import zod from "zod";

const updateCardDetailsSchema = zod.object({
    name: zod.string({message: "Name should be a string"}).max(100, {message: "Maximum length for Name is 100"}).optional(),
    description: zod.string({message: "Description should be a string"}).max(500, {message: "Maximum length for Description is 500"}).optional(),
    imageUrl: zod.string().url({message: "Invalid Url for Image"}).optional(),
    hobbies: zod.array(zod.string().max(100,{message: "Maximum length for hobbies is 100"})).optional(),
});

const updateCardDetailsValidator =async (req, res, next) => {
     const body = req.body;

     if(!updateCardDetailsSchema.safeParse(body).success){
         return res.status(400).json({
             msg: updateCardDetailsSchema.safeParse(body).error.issues[0].message
         });
     }

     return next();
}

export default updateCardDetailsValidator;
