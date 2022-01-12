const Sequelize = require('sequelize')
const allConfigs = require('../configs/sequelize')
const manufacturersModel = require('./manufacturers')
const productsModel = require('./products')

const environment = process.env.NODE_ENV || 'development'
const config = allConfigs[environment]


const connection = new Sequelize(config.database, config.username, config.password, {
  host: config.host, dialect: config.dialect
})

const manufacturers = manufacturersModel(connection, Sequelize)
const products = productsModel(connection, Sequelize, manufacturers)

manufacturers.hasMany(products)
products.belongsTo(manufacturers)

/* products.belongsToMany(members, {through: enrollments})
members.belongsToMany(products, {through: enrollments})
^^^^^This is for a many relationship that is connected through a linked table*/

module.exports = { manufacturers, products, Op: Sequelize.Op }
