const { Sequelize } = require('sequelize');
require('dotenv').config()


const dbConnection = new Sequelize(process.env.MYSQL_DATABASE, 'root',process.env.MYSQL_ROOT_PASSWORD, {
    host: process.env.MYSQL_URL,
    dialect: 'mysql',
    port: process.env.MYSQLPORT
})

module.exports = {
    dbConnection
}