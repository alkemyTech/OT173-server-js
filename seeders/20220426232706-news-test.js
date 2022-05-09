'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Entries', [{
      image: 'https://organizacionsomosmas.com/wp-content/themes/organizacion-somos-mas/assets/3-logo-somos-mas.png',
      name: 'others news',
      categoryId: '1',
      type: 'news',
      content: 'news'
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
