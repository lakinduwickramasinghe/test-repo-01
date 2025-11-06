'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('permissions', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      platform_type: {
        type: Sequelize.ENUM('web', 'mobile'),
        defaultValue: 'web'
      },
      category: {
        type: Sequelize.STRING(100)
      },
      is_main_feature: {
        type: Sequelize.BOOLEAN
      },
      main_feature_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0
      },
      name: {
        type: Sequelize.STRING(100),
        unique: true
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
    await queryInterface.dropTable('permissions');
  }
};
