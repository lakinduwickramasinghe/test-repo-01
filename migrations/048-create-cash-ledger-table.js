'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('cash_ledger', {
      id: {
        type: Sequelize.BIGINT.UNSIGNED,
        primaryKey: true,
        autoIncrement: true
      },
      ref_type: {
        type: Sequelize.STRING(100),
        allowNull: false
      },
      ref_id: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      entry_date: {
        type: Sequelize.DATE
      },
      description: {
        type: Sequelize.STRING(255)
      },
      debit: {
        type: Sequelize.DECIMAL(12,2),
        defaultValue: 0.00
      },
      credit: {
        type: Sequelize.DECIMAL(12,2),
        defaultValue: 0.00
      },
      balance_after: {
        type: Sequelize.DECIMAL(12,2)
      },
      created_at: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      }
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('cash_ledger');
  }
};
