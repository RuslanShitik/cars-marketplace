import mongoose from "mongoose";

const modelSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    mark: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Mark'
    }
},{
    timestamps: true
})

export default mongoose.model('Model', modelSchema)