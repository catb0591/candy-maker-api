/* eslint-disable max-len */
const manufacturers = (connection /* (making a connection to our DB)*/, Sequelize /* (using the sequelize library)*/) => {
  return connection.define('manufacturers'/* (table name)*/, {
    // definition of all of our columns
    id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
    name: { type: Sequelize.STRING, allowNull: false },
    country: { type: Sequelize.STRING },
  }, { paranoid: true /* setting to override the defaults, typically paranoid which is to have a deleted at instead of actually deleting*/ })
}

module.exports = manufacturers
