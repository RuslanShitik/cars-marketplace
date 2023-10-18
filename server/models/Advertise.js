import mongoose from "mongoose";

const advertiseSchema = new mongoose.Schema({
    generation: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Generation',
        required: true
    },
    price: {
        type: Number,
        required: true,
    },
    year: {
        type: Number,
        required: true,
    },
    transmission: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'TransmissionType',
        required: true
    },
    capacity: {
        type: Number,
        required: false,
    },
    fuel: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'FuelType',
        required: true
    },
    mileage: {
        type: Number,
        required: true
    },
    body: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'BodyType',
        required: true
    },
    driving: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'DrivingType',
        required: true
    },
    color: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Color',
        required: true
    },
    vin: {
        type: String,
        required: false
    },
    description: {
        type: String,
        required: false
    },
    viewsCount: {
        type: Number,
        default: 0,
    },
    isActual: {
        type: Boolean,
        default: true,
    },
    isModerated: {
        type: Boolean,
        default: true,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
},{
    timestamps: true
});

export default new mongoose.model('Advertise', advertiseSchema)
//todo: admin panel feat
//todo: good services and api and validation and