'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Slide', [{
      imageUrl: 'https://organizacionsomosmas.com/wp-content/themes/organizacion-somos-mas/assets/3-logo-somos-mas.png',
      text: 'Logo',
      order: '1',
      organizationId: '1'
    }], {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
