'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('customer_payment_cheques', {
      id: {
        type: Sequelize.BIGINT.UNSIGNED,
        primaryKey: true,
        autoIncrement: true
      },
      payment_id: {
        type: Sequelize.BIGINT.UNSIGNED,
        allowNull: false,
        references: {
          model: 'customer_payments',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      cheque_number: {
        type: Sequelize.STRING(100),
        allowNull: false
      },
      bank_name: {
        type: Sequelize.STRING(100),
        allowNull: false
      },
      cheque_date: {
        type: Sequelize.DATE,
        allowNull: false
      },
      deposit_date: {
        type: Sequelize.DATE,
        allowNull: true
      },
      status: {
        type: Sequelize.ENUM('pending','deposited','cleared','bounced','cancelled')
      },
      amount: {
        type: Sequelize.DECIMAL(12,2),
        allowNull: false
      },
      remarks: {
        type: Sequelize.TEXT
      },
      created_at: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      }
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('customer_payment_cheques');
  }
};
