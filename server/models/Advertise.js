import sequelize from "../sequelize.js";
import DataTypes from 'sequelize'

const Advertise = sequelize.define('Advertise',{
    price: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
    year: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    capacity: {
        type: DataTypes.FLOAT,
    },
    mileage: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    vin: {
        type: DataTypes.STRING,
    },
    description: {
        type: DataTypes.TEXT,
    },
    viewsCount: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
    },
    isActual: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
    },
    isModerated: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
    },
},{timestamps: true})

export default Advertise
//todo: admin panel feat
//todo: good services and api and validation and