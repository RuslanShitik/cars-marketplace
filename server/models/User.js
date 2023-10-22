// import mongoose from "mongoose";
// import bcrypt from "bcrypt";
// import {v4 as uuidv4} from 'uuid'
// import {roles} from "../helpers/role.js";

// const userSchema = new mongoose.Schema({
//     login: { type: String, required: true, unique: true },
//     password: { type: String, required: true },
//     role: { type: String, enum: roles, default: 'USER' },
//     first_name: { type: String, required: true },
//     last_name: { type: String, required: false },
//     phone_number: { type: String, required: true },
//     email: { type: String, required: true, unique: true },
//     activation_link: { type: String },
//     is_verified: { type: Boolean, default: false},
// },{
//     timestamps: true
// })
// userSchema.pre('save', async function(next){
//     const salt = await bcrypt.genSalt(3);
//     this.password = await bcrypt.hash(this.password, salt);
//     this.activation_link = uuidv4()
//     next();
// })

// export default mongoose.model('User', userSchema);
import sequelize from "../sequelize.js";
import DataTypes from 'sequelize'
import bcrypt from 'bcrypt';
import { v4 as uuidv4 } from 'uuid';
import { roles } from '../helpers/role.js';

const User = sequelize.define('User',{
    login: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },    
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    role: {
        type: DataTypes.ENUM(roles),
        allowNull: false,
        defaultValue: 'USER',
    },
    first_name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    last_name: {
        type: DataTypes.STRING,
    },
    phone_number: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    activation_link: {
        type: DataTypes.STRING,
    },
    is_verified: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    },
},{
    timestamps: true,
    hooks: {
        async beforeCreate(user) {
            console.log('===beforeCreate===\n', user)
            const saltRounds = 10;
            const salt = await bcrypt.genSalt(saltRounds);
            user.password = await bcrypt.hash(user.password, salt);
            user.activation_link = uuidv4();
        }
    }
})


export default User