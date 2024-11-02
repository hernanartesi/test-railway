const { Sequelize } = require('sequelize');
require('dotenv').config()


const dbConnection = new Sequelize(process.env.MYSQL_URL, {
    dialect: 'mysql',
    logging: false,  // Opcional: desactiva el logging para reducir el ruido en la consola
});
module.exports = {
    dbConnection
}