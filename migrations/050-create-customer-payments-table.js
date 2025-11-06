'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('customer_payments', {
      id: {
        type: Sequelize.BIGINT.UNSIGNED,
        primaryKey: true,
        autoIncrement: true
      },
      payment_ref: {
        type: Sequelize.STRING(100),
        allowNull: true
      },
      customer_id: {
        type: Sequelize.INTEGER.UNSIGNED,
        allowNull: false,
        references: {
          model: 'customers',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      payment_method: {
        type: Sequelize.ENUM('cash','cheque','online','adjustment')
      },
      date: {
        type: Sequelize.DATE,
        allowNull: false
      },
      amount_received: {
        type: Sequelize.DECIMAL(12,2),
        allowNull: false
      },
      settled_amount_total: {
        type: Sequelize.DECIMAL(12,2),
        allowNull: false
      },
      overpayment_amount: {
        type: Sequelize.DECIMAL(12,2),
        defaultValue: 0
      },
      remarks: {
        type: Sequelize.TEXT
      },
      received_by: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'users',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'RESTRICT'
      },
      status: {
        type: Sequelize.ENUM('pending','cleared','cancelled')
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
    await queryInterface.dropTable('customer_payments');
  }
};
