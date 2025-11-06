'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('items', {
      id: {
        type: Sequelize.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true
      },
      agency_id: {
        type: Sequelize.INTEGER.UNSIGNED,
        allowNull: false,
        references: {
          model: 'agencies',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      category_id: {
        type: Sequelize.INTEGER.UNSIGNED,
        allowNull: false,
        references: {
          model: 'categories',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'RESTRICT'
      },
      subcategory_id: {
        type: Sequelize.INTEGER.UNSIGNED,
        allowNull: false,
        references: {
          model: 'subcategories',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'RESTRICT'
      },
      code: {
        type: Sequelize.STRING(100),
        allowNull: false,
        unique: true
      },
      barcode: {
        type: Sequelize.STRING(100),
        allowNull: false,
        unique: true
      },
      name: {
        type: Sequelize.STRING(255),
        allowNull: false
      },
      display_name: {
        type: Sequelize.STRING(255),
        defaultValue: null
      },
      description: {
        type: Sequelize.TEXT,
        defaultValue: null
      },
      base_uom_id: {
        type: Sequelize.INTEGER.UNSIGNED,
        allowNull: false,
        references: {
          model: 'uoms',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'RESTRICT'
      },
      cost: {
        type: Sequelize.DECIMAL(12,2),
        allowNull: false,
        defaultValue: 0.00
      },
      selling_price: {
        type: Sequelize.DECIMAL(12,2),
        allowNull: false,
        defaultValue: 0.00
      },
      status: {
        type: Sequelize.ENUM('active', 'inactive', 'discontinued'),
        allowNull: false,
        defaultValue: 'active'
      },
      is_taxable: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false
      },
      tax_code_id: {
        type: Sequelize.INTEGER.UNSIGNED,
        defaultValue: null,
        references: {
          model: 'item_tax_codes',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
      },
      is_vat_inclusive: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false
      },
      custom_vat_rate: {
        type: Sequelize.DECIMAL(5,2),
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
    await queryInterface.dropTable('items');
  }
};
