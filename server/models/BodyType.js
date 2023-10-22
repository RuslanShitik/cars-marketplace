import sequelize from "../sequelize.js";
import DataTypes from 'sequelize'

const BodyType = sequelize.define('BodyType',{
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    }
},{timestamps: true})

export default BodyType