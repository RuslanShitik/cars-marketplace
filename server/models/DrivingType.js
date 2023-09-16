import mongoose from "mongoose";

const DrivingTypeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    }
},{
    timestamps: true
})

export default mongoose.model('DrivingType', DrivingTypeSchema)