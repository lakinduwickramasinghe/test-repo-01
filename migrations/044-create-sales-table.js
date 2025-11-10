'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('sales', {
      id: {
        type: Sequelize.BIGINT.UNSIGNED,
        primaryKey: true,
        autoIncrement: true
      },
      invoice_number: {
        type: Sequelize.STRING(100),
        allowNull: false
      },
      date: {
        type: Sequelize.DATE,
        allowNull: false
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
      agency_id: {
        type: Sequelize.INTEGER.UNSIGNED,
        allowNull: false,
        references: {
          model: 'agencies',
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
      payment_type: {
        type: Sequelize.ENUM('cash','credit','mixed')
      },
      total_qty: {
        type: Sequelize.DECIMAL(12,2),
        allowNull: false
      },
      sub_total: {
        type: Sequelize.DECIMAL(12,2),
        allowNull: false
      },
      discount_total: {
        type: Sequelize.DECIMAL(12,2),
        allowNull: true
      },
      vat_amount: {
        type: Sequelize.DECIMAL(12,2),
        allowNull: true
      },
      grand_total: {
        type: Sequelize.DECIMAL(12,2),
        allowNull: false
      },
      sales_return_id: {
        type: Sequelize.BIGINT.UNSIGNED,
        allowNull: true,
        references: {
          model: 'sales_returns',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'RESTRICT'
      },
      remarks: {
        type: Sequelize.TEXT
      },
      invoice_status: {
        type: Sequelize.ENUM('pending','delivered')
      },
      payment_status: {
        type: Sequelize.ENUM('pending','paid')
      },
      latitude: {
        type: Sequelize.DECIMAL(10,7),
        defaultValue: null
      },
      longitude: {
        type: Sequelize.DECIMAL(10,7),
        defaultValue: null
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
    await queryInterface.dropTable('sales');
  }
};
