import mongoose from "mongoose";
import bcrypt from "bcrypt";
import uuid from 'uuid'

const userSchema = new mongoose.Schema({
    login: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, enum: ['USER', 'ADMIN', 'SUPER_USER'], default: 'USER' },
    first_name: { type: String, required: true },
    last_name: { type: String, required: false },
    phone_number: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    activation_link: { type: String, required: true },
    is_verified: { type: Boolean, default: false},
},{
    timestamps: true
})
userSchema.pre('save', async function(next){
    this.password = await bcrypt.hash(this.password, 3);
    this.activation_link = uuid.v4()
    next();
})

export default mongoose.model('User', userSchema);