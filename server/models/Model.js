import sequelize from "../sequelize.js";
import DataTypes from 'sequelize'

const Model = sequelize.define('Model',{
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    markId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    }
},{timestamps: true})

export default Model