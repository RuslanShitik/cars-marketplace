import sequelize from "./sequelize.js";

const databaseSync = async () => {
    await sequelize.authenticate();
    console.log('Connection to POSTGRES has been established successfully.')
    await sequelize.sync({ alter: true });
    console.log("All models were synchronized successfully.");
}

databaseSync();