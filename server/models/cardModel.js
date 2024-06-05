import mongoose from "mongoose";


const cardSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    description: {
        type: String,
        required: true,
        trim: true,
    },
    imageUrl: {
        type: String,
        required: true,
        trim: true,
    },
    hobbies:  {
        type: [String],
        default: []
    },
    userId: {
        type: mongoose.Schema.ObjectId,
        ref: 'User',
        required: true
    }
}, {
    timestamps: true
})


const Card = mongoose.model('Card', cardSchema);

export default Card;
