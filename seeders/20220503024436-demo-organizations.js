'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Organizations',
      [
        {
          name: 'Somos Más',
          image: 'https://drive.google.com/file/d/1-j70Zmn2B1-0T_67JHJbNLKkI9sACMNi/view?usp=sharing',
          phone: 'tel:1160112988',
          address: 'mailto:somosfundacionmas@gmail.com',
          welcomeText: 'Muy contento de esta aca',
          facebook: 'https://es-la.facebook.com/Somos_Más',
          linkedin: 'https://www.linkedin.com/in/somos-mas-85b310224/?original_referer=https%3A%2F%2Fwww%2Egoogle%2Ecom%2F&originalSubdomain=ar',
          instagram: 'https://instagram.com/SomosMás',
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
