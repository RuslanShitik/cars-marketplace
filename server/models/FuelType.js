import sequelize from "../sequelize.js";
import DataTypes from 'sequelize'

const FuelType = sequelize.define('FuelType',{
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    }
},{timestamps: true})

export default FuelType