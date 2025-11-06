'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('stock_ledgers', {
      id: {
        type: Sequelize.BIGINT.UNSIGNED,
        primaryKey: true,
        autoIncrement: true
      },
      transaction_type: {
        type: Sequelize.STRING(100),
        allowNull: false
      },
      transaction_id: {
        type: Sequelize.BIGINT,
        allowNull: false
      },
      item_id: {
        type: Sequelize.INTEGER.UNSIGNED,
        allowNull: false,
        references: {
          model: 'items',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'RESTRICT'
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
      vehicle_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: 'vehicles',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'RESTRICT'
      },
      in_quantity: {
        type: Sequelize.DECIMAL(12,2),
        defaultValue: 0
      },
      out_quantity: {
        type: Sequelize.DECIMAL(12,2),
        defaultValue: 0
      },
      balance_after: {
        type: Sequelize.DECIMAL(12,2),
        allowNull: false
      },
      transaction_date: {
        type: Sequelize.DATE,
        allowNull: false
      },
      reference_number: {
        type: Sequelize.STRING(100),
        defaultValue: null
      }
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('stock_ledgers');
  }
};
