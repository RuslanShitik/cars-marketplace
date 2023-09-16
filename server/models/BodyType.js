import mongoose from "mongoose";

const BodyTypeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    }
},{
    timestamps: true
})

export default mongoose.model('BodyType', BodyTypeSchema)