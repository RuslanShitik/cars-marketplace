import sequelize from "../sequelize.js";
import DataTypes from 'sequelize'

const TransmissionType = sequelize.define('TransmissionType',{
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    }
},{timestamps: true})

export default TransmissionType