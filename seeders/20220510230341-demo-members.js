'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'Members',
      [
        {
          name: 'Rodrigo Fuente',
          image:
            'https://drive.google.com/file/d/1ukP7z8kzFREyCbsJxzizHckgvfQ80KKt/view?usp=sharing',
            createdAt: new Date(),
            updatedAt: new Date(),
        },
        {
          name: 'Miriam Rodriguez',
          image:
            'https://drive.google.com/file/d/1PNHzyL26jzsHltv281_rc3vEKdtTg2dF/view?usp=sharing',
            createdAt: new Date(),
            updatedAt: new Date(),
        },
        {
          name: 'Marita Gomez',
          image:
            'https://drive.google.com/file/d/1PNHzyL26jzsHltv281_rc3vEKdtTg2dF/view?usp=sharing',
            createdAt: new Date(),
            updatedAt: new Date(),
        },
        {
          id: 4,
          name: 'Maria Irola',
          image:
            'https://drive.google.com/file/d/1CIsJVHyui6__A0MNAxL6hyg3Trz3ZbyW/view?usp=sharing',
            createdAt: new Date(),
            updatedAt: new Date(),
        },
        {
          id: 5,
          name: 'Maria Garcia',
          image:
            'https://drive.google.com/file/d/152GBrIzHCw2AGUpQO7jc12xQ3zaFvhK9/view?usp=sharing',
            createdAt: new Date(),
            updatedAt: new Date(),
        },
        {
          name: 'Marco Fernandez',
          image:
            'https://drive.google.com/file/d/156uGhIMSWD_iOmvZEy3-UnGFLhvLW9r5/view?usp=sharing',
            createdAt: new Date(),
            updatedAt: new Date(),
        },
        {
          name: 'Cecilia Mendez',
          image:
            'https://drive.google.com/file/d/18Jub8i5qQnjBpuR-EsVx9Xtc0tzS2dmx/view?usp=sharing',
            createdAt: new Date(),
            updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
