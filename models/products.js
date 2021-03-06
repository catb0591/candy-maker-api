/* eslint-disable max-len */
const products = (connection, Sequelize, manufacturers) => {
  return connection.define('products', {
    id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
    name: { type: Sequelize.STRING, allowNull: false },
    yearIntroduced: { type: Sequelize.DATE },
    manufacturerId: { type: Sequelize.INTEGER, references: { model: manufacturers, key: 'id' } },
  }, { paranoid: true })
}

module.exports = products
