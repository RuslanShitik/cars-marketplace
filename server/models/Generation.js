import sequelize from "../sequelize.js";
import DataTypes from 'sequelize'

const Generation = sequelize.define('Generation',{
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    modelId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    }
},{timestamps: true})

export default Generation