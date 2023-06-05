"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Addresses", [
      {
        street: "1",
        in_between_street_a: "2",
        in_between_street_b: "3",
        city: "Merida",
        state: "Yucatan",
        country: "Mexico",
        zip: "97289",
        proof_of_address: "File",
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 1,
      },
      {
        street: "2",
        in_between_street_a: "3",
        in_between_street_b: "4",
        city: "Merida",
        state: "Yucatan",
        country: "Mexico",
        zip: "97384",
        proof_of_address: "File",
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 2,
      },
      {
        street: "54",
        in_between_street_a: "12",
        in_between_street_b: "14",
        city: "Santo Domingo",
        state: "Santo Domingo",
        country: "Republica Dominicana",
        zip: "10014",
        proof_of_address: "File",
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 3,
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Addresses", null, {});
  },
};
