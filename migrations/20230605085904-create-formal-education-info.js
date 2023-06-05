'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('FormalEducationInfos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      university_name: {
        type: Sequelize.STRING
      },
      state: {
        type: Sequelize.STRING
      },
      country: {
        type: Sequelize.STRING
      },
      career_name: {
        type: Sequelize.STRING
      },
      classes_completed: {
        type: Sequelize.BOOLEAN
      },
      proof_classes_completed: {
        type: Sequelize.STRING
      },
      degree_completed: {
        type: Sequelize.BOOLEAN
      },
      proof_degree_completed: {
        type: Sequelize.STRING
      },
      license_completed: {
        type: Sequelize.BOOLEAN
      },
      proof_license_completed: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('FormalEducationInfos');
  }
};