"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn("AddressExtraInfos", "addressId", {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: "Addresses",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "CASCADE",
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn("AddressExtraInfos", "addressId");
  },
};
