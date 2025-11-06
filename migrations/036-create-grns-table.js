'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('grns', {
      id: {
        type: Sequelize.BIGINT.UNSIGNED,
        primaryKey: true,
        autoIncrement: true
      },
      supplier_invoice_number: {
        type: Sequelize.STRING(100),
        allowNull: false
      },
      reference_number: {
        type: Sequelize.STRING(100),
        unique: true,
        defaultValue: null
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
      po_number: {
        type: Sequelize.STRING(100),
        defaultValue: null
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
      received_date: {
        type: Sequelize.DATE,
        allowNull: false
      },
      total: {
        type: Sequelize.DECIMAL(12,2),
        defaultValue: 0.00
      },
      vat: {
        type: Sequelize.DECIMAL(12,2),
        defaultValue: 0.00
      },
      transport_allowance: {
        type: Sequelize.DECIMAL(12,2),
        defaultValue: 0.00
      },
      payable: {
        type: Sequelize.DECIMAL(12,2),
        defaultValue: 0.00
      },
      status: {
        type: Sequelize.ENUM('Pending','Verified','Approved','Cancelled'),
        defaultValue: 'Pending'
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
    await queryInterface.dropTable('grns');
  }
};
