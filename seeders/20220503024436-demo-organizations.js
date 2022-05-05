'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Organizations',
      [
        {
          name: 'Rodrigo Fuente',
          image: 'https://drive.google.com/file/d/1ukP7z8kzFREyCbsJxzizHckgvfQ80KKt/view?usp=sharing',
          phone: '5923457430',
          address: 'Nicaragua 767',
          welcomeText: 'Muy contento de esta aca',
          facebook: 'https://es-la.facebook.com/RodrigoFuentes',
          linkedin: 'https://es-la.linkedin.com/RodrigoFuentes',
          instagram: 'https://es-la.instagram.com/RodrigoFuentes',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Miriam Rodriguez',
          image: 'https://drive.google.com/file/d/1PNHzyL26jzsHltv281_rc3vEKdtTg2dF/view?usp=sharing',
          phone: '8647223019',
          address: 'Buenos Aires 2222',
          welcomeText: 'Hoy es un dia perfecto',
          facebook: 'https://es-la.facebook.com/MiriamRodriguez',
          linkedin: 'https://es-la.linkedin.com/MiriamRodriguez',
          instagram: 'https://es-la.instagram.com/MiriamRodriguez',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Marita Gomez',
          image: 'https://drive.google.com/file/d/1PNHzyL26jzsHltv281_rc3vEKdtTg2dF/view?usp=sharing',
          phone: '5024192311',
          address: 'Bolivar 4785',
          welcomeText: 'Gracias por ayudar',
          facebook: 'https://es-la.facebook.com/MaritaGomez',
          linkedin: 'https://es-la.linkedin.com/MaritaGomez',
          instagram: 'https://es-la.instagram.com/MaritaGomez',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Maria Irola',
          image: 'https://drive.google.com/file/d/1CIsJVHyui6__A0MNAxL6hyg3Trz3ZbyW/view?usp=sharing',
          phone: '43664552',
          address: 'Rivadavia 1111',
          welcomeText: 'Con una sonrisa todos los dias',
          facebook: 'https://es-la.facebook.com/MariaIrola',
          linkedin: 'https://es-la.linkedin.com/MariaIrola',
          instagram: 'https://es-la.instagram.com/MariaIrola',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Maria Garcia',
          image: 'https://drive.google.com/file/d/152GBrIzHCw2AGUpQO7jc12xQ3zaFvhK9/view?usp=sharing',
          phone: '2632430400',
          address: 'Juncal 1986',
          welcomeText: 'Vamos por mas!!!!',
          facebook: 'https://es-la.facebook.com/MariaGarcia',
          linkedin: 'https://es-la.linkedin.com/MariaGarcia',
          instagram: 'https://es-la.instagram.com/MariaGarcia',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Marco Fernandez',
          image: 'https://drive.google.com/file/d/156uGhIMSWD_iOmvZEy3-UnGFLhvLW9r5/view?usp=sharing',
          phone: '1144552366',
          address: 'Luro 3050',
          welcomeText: 'Que bueno compartir con ustedes',
          facebook: 'https://es-la.facebook.com/MarcoFernandez',
          linkedin: 'https://es-la.linkedin.com/MarcoFernandez',
          instagram: 'https://es-la.instagram.com/MarcoFernandez',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Cecilia Mendez',
          image: 'https://drive.google.com/file/d/18Jub8i5qQnjBpuR-EsVx9Xtc0tzS2dmx/view?usp=sharing',
          phone: '14251846',
          address: 'Gascon 7023',
          welcomeText: 'Siempre con ganas de ayudar',
          facebook: 'https://es-la.facebook.com/CeciliaMendez',
          linkedin: 'https://es-la.linkedin.com/CeciliaMendez',
          instagram: 'https://es-la.instagram.com/CeciliaMendez',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
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
