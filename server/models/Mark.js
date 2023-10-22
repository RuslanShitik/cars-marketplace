import sequelize from "../sequelize.js";
import DataTypes from 'sequelize'

const Mark = sequelize.define('Mark',{
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    }
},{timestamps: true})


export default Mark