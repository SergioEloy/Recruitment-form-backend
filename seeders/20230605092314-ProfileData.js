"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Profiles", [
      {
        phone: "9993548605",
        country_code: "52",
        email: "sergioeloyespadas@gmail.com",
        alt_email: "ing.sergioeloyespadas@gmail.com",
        reference: "Instagram",
        other_reference: "TikTok",
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 1,
      },
      {
        phone: "9991850524",
        country_code: "52",
        email: "alanvillanueva@gmail.com",
        alt_email: "alanvillanueva2@gmail.com",
        reference: "Google",
        other_reference: "Facebook",
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 2,
      },
      {
        phone: "8294613701",
        country_code: "1",
        email: "AndyHdzRD@gmail.com",
        alt_email: "chocolatitodominicano@gmail.com",
        reference: "Linkedin",
        other_reference: "Instagram",
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 3,
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Profiles", null, {});
  },
};
