'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('item_dimensions', {
      id: {
        type: Sequelize.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true
      },
      item_id: {
        type: Sequelize.INTEGER.UNSIGNED,
        allowNull: false,
        references: {
          model: 'items',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      height: {
        type: Sequelize.DECIMAL(5,2),
        allowNull: false,
        defaultValue: 0.00
      },
      width: {
        type: Sequelize.DECIMAL(5,2),
        allowNull: false,
        defaultValue: 0.00
      },
      length: {
        type: Sequelize.DECIMAL(5,2),
        allowNull: false,
        defaultValue: 0.00
      },
      weight: {
        type: Sequelize.DECIMAL(5,2),
        allowNull: false,
        defaultValue: 0.00
      }
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('item_dimensions');
  }
};
