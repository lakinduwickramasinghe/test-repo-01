'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('sales_invoice_items', {
      id: {
        type: Sequelize.BIGINT.UNSIGNED,
        primaryKey: true,
        autoIncrement: true
      },
      invoice_id: {
        type: Sequelize.BIGINT.UNSIGNED,
        allowNull: false,
        references: {
          model: 'sales_invoices',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
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
      qty: {
        type: Sequelize.DECIMAL(12,2),
        allowNull: false
      },
      unit_price: {
        type: Sequelize.DECIMAL(12,2),
        allowNull: false
      },
      discount: {
        type: Sequelize.DECIMAL(12,2),
        allowNull: false
      },
      vat_rate: {
        type: Sequelize.DECIMAL(5,2),
        defaultValue: 0.00
      },
      vat_amount: {
        type: Sequelize.DECIMAL(5,2),
        defaultValue: 0.00
      },
      sub_total: {
        type: Sequelize.DECIMAL(12,2),
        allowNull: false
      }
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('sales_invoice_items');
  }
};
