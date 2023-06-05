"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("AddressExtraInfos", [
      {
        type_of_residency: "Rented",
        other_residency: null,
        people: "I live with my parents",
        createdAt: new Date(),
        updatedAt: new Date(),
        addressId: 1,
      },
      {
        type_of_residency: "Owned (by me or my parents)",
        other_residency: null,
        people: "I live with my parents",
        createdAt: new Date(),
        updatedAt: new Date(),
        addressId: 2,
      },
      {
        type_of_residency: "Rented",
        other_residency: null,
        people: "I live with my significant other",
        createdAt: new Date(),
        updatedAt: new Date(),
        addressId: 3,
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("AddressExtraInfos", null, {});
  },
};
