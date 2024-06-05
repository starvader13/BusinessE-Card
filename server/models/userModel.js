import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        trim: true,
    },
    password: {
        type: String,
        required: true,
        trim: true,
    },
    admin: {
        type: Boolean,
        default: false,
        required: false
    }
},{
    timestamps: true
});

const User = mongoose.model('User', userSchema);

export default User;
