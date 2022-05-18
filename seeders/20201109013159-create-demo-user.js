'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Users', [{
      firstName: 'Admin1',
      lastName: 'Admin1',
      email: 'admin1@admin.com',
      password: '$2a$10$pqLRG7iMSWyxxIwuTJh0BuLfqHrzyXpe2WAj9nRiCywIrq94HcQGa',
      roleId: 1,
      image: 'https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png',
      createdAt: new Date,
      updatedAt: new Date
    },
    {
      firstName: 'Admin2',
      lastName: 'Admin2',
      email: 'admin2@admin.com',
      password: '$2a$10$pqLRG7iMSWyxxIwuTJh0BuLfqHrzyXpe2WAj9nRiCywIrq94HcQGa',
      roleId: 1,
      image: 'https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png',
      createdAt: new Date,
      updatedAt: new Date
    },
    {
      firstName: 'Admin3',
      lastName: 'Admin3',
      email: 'admin3@admin.com',
      password: '$2a$10$pqLRG7iMSWyxxIwuTJh0BuLfqHrzyXpe2WAj9nRiCywIrq94HcQGa',
      roleId: 1,
      image: 'https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png',
      createdAt: new Date,
      updatedAt: new Date
    },
    {
      firstName: 'Admin4',
      lastName: 'Admin4',
      email: 'admin4@admin.com',
      password: '$2a$10$pqLRG7iMSWyxxIwuTJh0BuLfqHrzyXpe2WAj9nRiCywIrq94HcQGa',
      roleId: 1,
      image: 'https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png',
      createdAt: new Date,
      updatedAt: new Date
    },
    {
      firstName: 'Admin5',
      lastName: 'Admin5',
      email: 'admin5@admin.com',
      password: '$2a$10$pqLRG7iMSWyxxIwuTJh0BuLfqHrzyXpe2WAj9nRiCywIrq94HcQGa',
      roleId: 1,
      image: 'https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png',
      createdAt: new Date,
      updatedAt: new Date
    },
    {
      firstName: 'Admin6',
      lastName: 'Admin6',
      email: 'admin6@admin.com',
      password: '$2a$10$pqLRG7iMSWyxxIwuTJh0BuLfqHrzyXpe2WAj9nRiCywIrq94HcQGa',
      roleId: 1,
      image: 'https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png',
      createdAt: new Date,
      updatedAt: new Date
    },
    {
      firstName: 'Admin7',
      lastName: 'Admin7',
      email: 'admin7@admin.com',
      password: '$2a$10$pqLRG7iMSWyxxIwuTJh0BuLfqHrzyXpe2WAj9nRiCywIrq94HcQGa',
      roleId: 1,
      image: 'https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png',
      createdAt: new Date,
      updatedAt: new Date
    },
    {
      firstName: 'Admin8',
      lastName: 'Admin8',
      email: 'admin8@admin.com',
      password: '$2a$10$pqLRG7iMSWyxxIwuTJh0BuLfqHrzyXpe2WAj9nRiCywIrq94HcQGa',
      roleId: 1,
      image: 'https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png',
      createdAt: new Date,
      updatedAt: new Date
    },
    {
      firstName: 'Admin9',
      lastName: 'Admin9',
      email: 'admin9@admin.com',
      password: '$2a$10$pqLRG7iMSWyxxIwuTJh0BuLfqHrzyXpe2WAj9nRiCywIrq94HcQGa',
      roleId: 1,
      image: 'https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png',
      createdAt: new Date,
      updatedAt: new Date
    },
    {
      firstName: 'Admin10',
      lastName: 'Admin10',
      email: 'admin10@admin.com',
      password: '$2a$10$pqLRG7iMSWyxxIwuTJh0BuLfqHrzyXpe2WAj9nRiCywIrq94HcQGa',
      roleId: 1,
      image: 'https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png',
      createdAt: new Date,
      updatedAt: new Date
    },
    {
      firstName: 'Standard1',
      lastName: 'Standard1',
      email: 'standard1@standard.com',
      password: '$2a$10$pqLRG7iMSWyxxIwuTJh0BuLfqHrzyXpe2WAj9nRiCywIrq94HcQGa',
      roleId: 2,
      image: 'https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png',
      createdAt: new Date,
      updatedAt: new Date
    },
    {
      firstName: 'Standard2',
      lastName: 'Standard2',
      email: 'standard2@standard.com',
      password: '$2a$10$pqLRG7iMSWyxxIwuTJh0BuLfqHrzyXpe2WAj9nRiCywIrq94HcQGa',
      roleId: 2,
      image: 'https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png',
      createdAt: new Date,
      updatedAt: new Date
    },
    {
      firstName: 'Standard3',
      lastName: 'Standard3',
      email: 'standard3@standard.com',
      password: '$2a$10$pqLRG7iMSWyxxIwuTJh0BuLfqHrzyXpe2WAj9nRiCywIrq94HcQGa',
      roleId: 2,
      image: 'https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png',
      createdAt: new Date,
      updatedAt: new Date
    },
    {
      firstName: 'Standard4',
      lastName: 'Standard4',
      email: 'standard4@standard.com',
      password: '$2a$10$pqLRG7iMSWyxxIwuTJh0BuLfqHrzyXpe2WAj9nRiCywIrq94HcQGa',
      roleId: 2,
      image: 'https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png',
      createdAt: new Date,
      updatedAt: new Date
    },
    {
      firstName: 'Standard5',
      lastName: 'Standard5',
      email: 'standard5@standard.com',
      password: '$2a$10$pqLRG7iMSWyxxIwuTJh0BuLfqHrzyXpe2WAj9nRiCywIrq94HcQGa',
      roleId: 2,
      image: 'https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png',
      createdAt: new Date,
      updatedAt: new Date
    },
    {
      firstName: 'Standard6',
      lastName: 'Standard6',
      email: 'standard6@standard.com',
      password: '$2a$10$pqLRG7iMSWyxxIwuTJh0BuLfqHrzyXpe2WAj9nRiCywIrq94HcQGa',
      roleId: 2,
      image: 'https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png',
      createdAt: new Date,
      updatedAt: new Date
    },
    {
      firstName: 'Standard7',
      lastName: 'Standard7',
      email: 'standard7@standard.com',
      password: '$2a$10$pqLRG7iMSWyxxIwuTJh0BuLfqHrzyXpe2WAj9nRiCywIrq94HcQGa',
      roleId: 2,
      image: 'https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png',
      createdAt: new Date,
      updatedAt: new Date
    },
    {
      firstName: 'Standard8',
      lastName: 'Standard8',
      email: 'standard8@standard.com',
      password: '$2a$10$pqLRG7iMSWyxxIwuTJh0BuLfqHrzyXpe2WAj9nRiCywIrq94HcQGa',
      roleId: 2,
      image: 'https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png',
      createdAt: new Date,
      updatedAt: new Date
    },
    {
      firstName: 'Standard9',
      lastName: 'Standard9',
      email: 'standard9@standard.com',
      password: '$2a$10$pqLRG7iMSWyxxIwuTJh0BuLfqHrzyXpe2WAj9nRiCywIrq94HcQGa',
      roleId: 2,
      image: 'https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png',
      createdAt: new Date,
      updatedAt: new Date
    },
    {
      firstName: 'Standard10',
      lastName: 'Standard10',
      email: 'standard10@standard.com',
      password: '$2a$10$pqLRG7iMSWyxxIwuTJh0BuLfqHrzyXpe2WAj9nRiCywIrq94HcQGa',
      roleId: 2,
      image: 'https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png',
      createdAt: new Date,
      updatedAt: new Date
    },], {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Users', null, {});
  }
};
