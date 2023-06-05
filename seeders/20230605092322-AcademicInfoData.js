"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("AcademicInfos", [
      {
        software_devel_comments: "Nothing",
        degree_level: "Highschool",
        informal_education: null,
        other_education: null,
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 1,
      },
      {
        software_devel_comments: "Team Front-End",
        degree_level: "University",
        informal_education: null,
        other_education: null,
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 2,
      },
      {
        software_devel_comments: "lorem Ipsum",
        degree_level: "Masters",
        informal_education: null,
        other_education: null,
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 3,
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("AcademicInfos", null, {});
  },
};
