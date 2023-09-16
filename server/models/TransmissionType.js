import mongoose from "mongoose";

const transmissionSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    }
},{
    timestamps: true
})

export default mongoose.model('TransmissionType', transmissionSchema)