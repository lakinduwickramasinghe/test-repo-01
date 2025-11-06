'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('employees', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      department_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'departments',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
      },
      employee_number: {
        type: Sequelize.STRING(20),
        unique: true
      },
      first_name: {
        type: Sequelize.STRING(50)
      },
      last_name: {
        type: Sequelize.STRING(50)
      },
      email: {
        type: Sequelize.STRING(100),
        unique: true
      },
      mobile_number: {
        type: Sequelize.STRING(15)
      },
      date_of_birth: {
        type: Sequelize.DATEONLY
      },
      gender: {
        type: Sequelize.ENUM('Male', 'Female')
      },
      address: {
        type: Sequelize.TEXT
      },
      job_title: {
        type: Sequelize.STRING(100)
      },
      hire_date: {
        type: Sequelize.DATEONLY
      },
      image_path: {
        type: Sequelize.STRING(255)
      },
      status: {
        type: Sequelize.ENUM('Active', 'Inactive', 'Resigned', 'Terminated'),
        defaultValue: 'Active'
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
    await queryInterface.dropTable('employees');
  }
};
