'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('attendances', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      employee_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'employees',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      date: {
        type: Sequelize.DATEONLY
      },
      clock_in_time: {
        type: Sequelize.DATE
      },
      clock_out_time: {
        type: Sequelize.DATE
      },
      status: {
        type: Sequelize.STRING(100)
      }
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('attendances');
  }
};
