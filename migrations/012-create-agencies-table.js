'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('agencies', {
      id: {
        type: Sequelize.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true
      },
      name: {
        type: Sequelize.STRING(100),
        allowNull: false
      },
      description: {
        type: Sequelize.TEXT
      },
      payee_name: {
        type: Sequelize.STRING(100),
        allowNull: false
      },
      address: {
        type: Sequelize.TEXT
      },
      mobile_number: {
        type: Sequelize.STRING(15)
      },
      credit_period: {
        type: Sequelize.INTEGER
      },
      credit_limit: {
        type: Sequelize.DECIMAL(12,2),
        allowNull: true
      },
      accept_returns: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      return_acceptance_type: {
        type: Sequelize.STRING(50)
      },
      return_value: {
        type: Sequelize.STRING(100),
        allowNull: true
      },
      discount_claims: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      sales_type: {
        type: Sequelize.ENUM('PreSelling', 'OnDelivery'),
        defaultValue: 'OnDelivery'
      },
      transport_allowance: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      transport_allowance_percentage: {
        type: Sequelize.STRING(100),
        allowNull: true
      },
      status: {
        type: Sequelize.ENUM('Active', 'Inactive'),
        defaultValue: 'Active'
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
    await queryInterface.dropTable('agencies');
  }
};
