'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('vehicles', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      agency_id: {
        type: Sequelize.INTEGER.UNSIGNED,
        references: {
          model: 'agencies',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
      },
      vehicle_number: {
        type: Sequelize.STRING(50),
        unique: true
      },
      type: {
        type: Sequelize.ENUM('Van', 'Lorry', 'Car', 'Bike', 'Other')
      },
      capacity_kg: {
        type: Sequelize.INTEGER
      },
      height_feet: {
        type: Sequelize.DECIMAL(5,2),
        allowNull: true
      },
      width_feet: {
        type: Sequelize.DECIMAL(5,2),
        allowNull: true
      },
      length_feet: {
        type: Sequelize.DECIMAL(5,2),
        allowNull: true
      },
      passenger_capacity: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      status: {
        type: Sequelize.ENUM('Active', 'Inactive', 'Under Maintenance', 'Retired'),
        defaultValue: 'Active'
      },
      is_rd_viable: {
        type: Sequelize.BOOLEAN
      },
      rd_value: {
        type: Sequelize.DECIMAL(12,2),
        allowNull: true
      },
      is_delivery_vehicle: {
        type: Sequelize.BOOLEAN
      }
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('vehicles');
  }
};
