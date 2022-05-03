'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("Testimonials", [{
       name: "Nombre del testimonio",
       image: "https://picsum.photos/200/300",
       content: "Contenido del testimonio.",
       createdAt: new Date(),
       updatedAt: new Date(),
    }], {})
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