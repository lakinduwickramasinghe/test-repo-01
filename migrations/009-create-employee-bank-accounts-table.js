'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('employee_bank_accounts', {
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
      bank: {
        type: Sequelize.STRING(100)
      },
      account_holder_name: {
        type: Sequelize.STRING(100)
      },
      account_number: {
        type: Sequelize.STRING(50)
      },
      branch: {
        type: Sequelize.STRING(100)
      },
      ref: {
        type: Sequelize.STRING(100)
      }
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('employee_bank_accounts');
  }
};
