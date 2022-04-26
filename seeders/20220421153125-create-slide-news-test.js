'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('news', [{
      name: 'Pedro Picapiedra',
      content: 'Abcdefghij',
      image: 'https://organizacionsomosmas.com/wp-content/themes/organizacion-somos-mas/assets/3-logo-somos-mas.png',
      categoryId: 2,
      type: 'abcdfgihj',
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
