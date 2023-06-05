"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("ScholarshipInfos", [
      {
        level: "University",
        kind: "Academics",
        period: 24,
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 1,
      },
      {
        level: "University",
        kind: "Academics",
        period: 48,
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 2,
      },
      {
        level: "University",
        kind: "Academics",
        period: 48,
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 3,
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("ScholarshipInfos", null, {});
  },
};
