'use strict'

module.exports = {
  up: async (queryInterface) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    return queryInterface.bulkInsert('products', [
      {
        name: 'Mamba',
        yearIntroduced: '1953-01-01',
        manufacturerId: 1
      },
      {
        name: 'Caramello',
        yearIntroduced: '1976-01-01',
        manufacturerId: 2
      },
      {
        name: 'Creme Egg',
        yearIntroduced: '1923-01-01',
        manufacturerId: 2
      },
    ])
  },

  down: async (queryInterface) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    return queryInterface.bulkDelete('products')
  }
}
