import sequelize from "../sequelize.js";
import DataTypes from 'sequelize'

const DrivingType = sequelize.define('DrivingType',{
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    }
},{timestamps: true})

export default DrivingType