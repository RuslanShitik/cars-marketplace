import mongoose from "mongoose";
import bcrypt from "bcrypt";
import {v4 as uuidv4} from 'uuid'
import {roles} from "../helpers/role.js";

const userSchema = new mongoose.Schema({
    login: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, enum: roles, default: 'USER' },
    first_name: { type: String, required: true },
    last_name: { type: String, required: false },
    phone_number: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    activation_link: { type: String },
    is_verified: { type: Boolean, default: false},
},{
    timestamps: true
})
userSchema.pre('save', async function(next){
    const salt = await bcrypt.genSalt(3);
    this.password = await bcrypt.hash(this.password, salt);
    this.activation_link = uuidv4()
    next();
})

export default mongoose.model('User', userSchema);