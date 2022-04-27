'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.bulkInsert('Entries', [{
            name: 'example',
            image: 'https://organizacionsomosmas.com/wp-content/themes/organizacion-somos-mas/assets/3-logo-somos-mas.png',
            content: '1',
            categoryId: 1,
            type: "news",
            createdAt: new Date,
            updatedAt: new Date
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
