'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('customer_ledgers', {
      id: {
        type: Sequelize.BIGINT.UNSIGNED,
        primaryKey: true,
        autoIncrement: true
      },
      warehouse_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'warehouses',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'RESTRICT'
      },
      customer_id: {
        type: Sequelize.INTEGER.UNSIGNED,
        allowNull: false,
        references: {
          model: 'customers',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'RESTRICT'
      },
      entry_date: {
        type: Sequelize.DATE
      },
      type: {
        type: Sequelize.STRING(100),
        allowNull: false
      },
      ref_id: {
        type: Sequelize.BIGINT,
        allowNull: true
      },
      description: {
        type: Sequelize.STRING(255),
        allowNull: true
      },
      debit: {
        type: Sequelize.DECIMAL(12,2),
        allowNull: false
      },
      credit: {
        type: Sequelize.DECIMAL(12,2),
        allowNull: false
      },
      balance_after: {
        type: Sequelize.DECIMAL(12,2),
        allowNull: false
      },
      created_at: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      }
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('customer_ledgers');
  }
};
