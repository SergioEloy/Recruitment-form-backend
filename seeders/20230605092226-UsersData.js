"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Users", [
      {
        username: "Serg.io",
        firstName: "Sergio",
        lastName: "Espadas",
        email: "sergioeloyespadas@gmail.com",
        phone: "9993548605",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: "VillAlan",
        firstName: "Alan",
        lastName: "Villanueva",
        email: "alanvillanueva@gmail.com",
        phone: "9991850524",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: "AndyHdz",
        firstName: "Andy",
        lastName: "Hernandez",
        email: "AndyHdzRD@gmail.com",
        phone: "8294613701",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Users", null, {});
  },
};
