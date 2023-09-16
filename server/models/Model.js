import mongoose from "mongoose";

const modelSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    mark: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Mark',
        required: true,
    }
},{
    timestamps: true
})

export default mongoose.model('Model', modelSchema)