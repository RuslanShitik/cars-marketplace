import mongoose from "mongoose";

const FuelTypeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    }
},{
    timestamps: true
})

export default mongoose.model('FuelType', FuelTypeSchema)