'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('collection_handovers', {
      id: {
        type: Sequelize.BIGINT.UNSIGNED,
        primaryKey: true,
        autoIncrement: true
      },
      collected_by: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'users',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'RESTRICT'
      },
      verified_by: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'users',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'RESTRICT'
      },
      handover_date: {
        type: Sequelize.DATE
      },
      expected_amount: {
        type: Sequelize.DECIMAL(12,2),
        allowNull: false
      },
      actual_amount: {
        type: Sequelize.DECIMAL(12,2),
        allowNull: false
      },
      difference_amount: {
        type: Sequelize.DECIMAL(12,2),
        allowNull: false
      },
      status: {
        type: Sequelize.ENUM('pending','verified','finalized'),
        defaultValue: 'pending'
      },
      remarks: {
        type: Sequelize.STRING(255)
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
    await queryInterface.dropTable('collection_handovers');
  }
};
