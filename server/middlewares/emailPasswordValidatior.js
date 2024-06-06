import zod from 'zod';

const emailPasswordSchema = zod.object({
    email: zod.string().email(),
    password: zod.string().min(4).max(12).regex(/\d/)
});

const emailPasswordValidator = (req, res, next) => {
    const data = req.body;
    if(!emailPasswordSchema.safeParse({email: data.email, password: data.password}).success){
        return res.status(400).json({
            msg: "Either the email or the password does not follow the correct format",
        });
    }

    return next();
}

export default emailPasswordValidator;
