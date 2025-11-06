'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('departments', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      department_name: {
        type: Sequelize.STRING(100),
        unique: true
      },
      description: {
        type: Sequelize.TEXT
      }
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('departments');
  }
};
