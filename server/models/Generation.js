import mongoose from "mongoose";

const generationSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    model: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Model',
        required: true,
    }
},{
    timestamps: true
})

export default mongoose.model('Generation', generationSchema)