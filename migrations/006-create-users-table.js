'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('users', {
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
        onDelete: 'SET NULL'
      },
      user_name: {
        type: Sequelize.STRING(100)
      },
      password: {
        type: Sequelize.STRING(255)
      },
      email: {
        type: Sequelize.STRING(100),
        unique: true
      },
      two_fa_enabled: {
        type: Sequelize.BOOLEAN
      },
      auth_code: {
        type: Sequelize.STRING(255)
      },
      status: {
        type: Sequelize.ENUM('Active', 'Inactive', 'AdministrativelyDown'),
        defaultValue: 'Active'
      },
      image: {
        type: Sequelize.STRING(255),
        allowNull: true
      },
      created_at: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      updated_at: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
        onUpdate: Sequelize.literal('CURRENT_TIMESTAMP')
      }
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('users');
  }
};
