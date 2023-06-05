"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("GovernmentInfos", [
      {
        curp: "EABS960816SHXYYK51",
        identification_number: "",
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 1,
      },
      {
        curp: "AVSU874268SHYYLX18",
        identification_number: "",
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 2,
      },
      {
        curp: "",
        identification_number: "A1126842",
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 3,
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("GovernmentInfos", null, {});
  },
};
