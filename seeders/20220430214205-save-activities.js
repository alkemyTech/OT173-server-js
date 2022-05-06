'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'Activities',
      [
        {
          name: 'Ayudando a los animales de la granja',
          image: 'https://previews.123rf.com/images/visionsi/visionsi1409/visionsi140900022/31207102-farmer-est%C3%A1-trabajando-en-la-granja-org%C3%A1nica-con-vacas-lecheras-modelo-es-un-trabajador-agr%C3%ADcola-rea.jpg',
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum imperdiet ante libero, eget consequat libero posuere ut. Mauris consectetur efficitur ex et bibendum. Proin id sapien sit amet diam commodo lacinia vitae sit amet lorem. Nulla sagittis lectus non pharetra convallis. In dapibus hendrerit dolor, sit amet tincidunt felis dapibus sed. Mauris eget velit vitae massa aliquam dignissim vitae vitae nisl. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut aliquet enim, et consequat sem. Vivamus non sapien ac nisi posuere aliquam vitae consequat mauris. Donec eget semper enim. Nunc aliquet posuere ornare. Vivamus mattis augue at dictum tincidunt.',
          deleteAt: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Ayuda en comedor infantil',
          image: 'https://faros.hsjdbcn.org/sites/default/files/styles/shareimg/public/comedor-escolar.jpg?itok=7ZWo8ddj',
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum imperdiet ante libero, eget consequat libero posuere ut. Mauris consectetur efficitur ex et bibendum. Proin id sapien sit amet diam commodo lacinia vitae sit amet lorem. Nulla sagittis lectus non pharetra convallis. In dapibus hendrerit dolor, sit amet tincidunt felis dapibus sed. Mauris eget velit vitae massa aliquam dignissim vitae vitae nisl. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut aliquet enim, et consequat sem. Vivamus non sapien ac nisi posuere aliquam vitae consequat mauris. Donec eget semper enim. Nunc aliquet posuere ornare. Vivamus mattis augue at dictum tincidunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum imperdiet ante libero, eget consequat libero posuere ut. Mauris consectetur efficitur ex et bibendum. Proin id sapien sit amet diam commodo lacinia vitae sit amet lorem. Nulla sagittis lectus non pharetra convallis. In dapibus hendrerit dolor, sit amet tincidunt felis dapibus sed. Mauris eget velit vitae massa aliquam dignissim vitae vitae nisl. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut aliquet enim, et consequat sem. Vivamus non sapien ac nisi posuere aliquam vitae consequat mauris. Donec eget semper enim. Nunc aliquet posuere ornare. Vivamus mattis augue at dictum tincidunt.',
          deleteAt: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Activities', null, {});
  },
};
