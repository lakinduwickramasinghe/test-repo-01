'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('customers', {
      id: {
        type: Sequelize.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true
      },
      company_name: {
        type: Sequelize.STRING(255),
        allowNull: false
      },
      contact_name: {
        type: Sequelize.STRING(150),
        defaultValue: null
      },
      phone: {
        type: Sequelize.STRING(50),
        defaultValue: null
      },
      alt_phone: {
        type: Sequelize.STRING(50),
        defaultValue: null
      },
      email: {
        type: Sequelize.STRING(150),
        defaultValue: null
      },
      address: {
        type: Sequelize.TEXT,
        defaultValue: null
      },
      type: {
        type: Sequelize.ENUM('cash', 'credit')
      },
      credit_limit: {
        type: Sequelize.DECIMAL(12,2),
        defaultValue: 0.00
      },
      status: {
        type: Sequelize.ENUM('active', 'inactive'),
        defaultValue: 'active'
      },
      latitude: {
        type: Sequelize.DECIMAL(10,7),
        defaultValue: null
      },
      longitude: {
        type: Sequelize.DECIMAL(10,7),
        defaultValue: null
      },
      image_path: {
        type: Sequelize.STRING(260),
        allowNull: true
      },
      created_by: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'users',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'RESTRICT'
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
    await queryInterface.dropTable('customers');
  }
};
