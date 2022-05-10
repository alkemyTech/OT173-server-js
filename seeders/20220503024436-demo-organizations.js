'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Organizations',
      [
        {
          name: 'Somos mas',
          image: 'https://drive.google.com/file/d/1-j70Zmn2B1-0T_67JHJbNLKkI9sACMNi/view?usp=sharing',
          phone: '5923457430',
          address: 'Nicaragua 767',
          welcomeText: 'Muy contento de esta aca',
          facebook: 'https://es-la.facebook.com/RodrigoFuentes',
          linkedin: 'https://es-la.linkedin.com/RodrigoFuentes',
          instagram: 'https://es-la.instagram.com/RodrigoFuentes',
          createdAt: new Date(),
          updatedAt: new Date(),
        }      
      ], {});
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
