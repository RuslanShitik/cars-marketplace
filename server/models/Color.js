import sequelize from "../sequelize.js";
import DataTypes from 'sequelize'

const Color = sequelize.define('Color',{
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    }
},{timestamps: true})

export default Color