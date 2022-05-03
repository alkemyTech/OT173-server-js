module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.createTable("testimonials", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING
      },
      image: {
        allowNull: false,
        type: Sequelize.STRING
      },
      content: {
        allowNull: false,
        type: Sequelize.TEXT
      }
    })
  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.dropTable("testimonials")
  }
};