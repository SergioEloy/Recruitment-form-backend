"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("FormalEducationInfos", [
      {
        university_name: "UADY",
        state: "Yucatan",
        country: "Mexico",
        career_name: "Civil Engineer",
        classes_completed: true,
        proof_classes_completed: "File",
        degree_completed: true,
        proof_degree_completed: "File2",
        license_completed: true,
        proof_license_completed: "File3",
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 1,
      },
      {
        university_name: "UADY",
        state: "Yucatan",
        country: "Mexico",
        career_name: "Math",
        classes_completed: true,
        proof_classes_completed: "File",
        degree_completed: true,
        proof_degree_completed: "File2",
        license_completed: true,
        proof_license_completed: "File3",
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 2,
      },
      {
        university_name: "University of Santo Domingo",
        state: "Santo Domingo",
        country: "Republica Dominicana",
        career_name: "Chemistry",
        classes_completed: true,
        proof_classes_completed: "File",
        degree_completed: true,
        proof_degree_completed: "File2",
        license_completed: true,
        proof_license_completed: "File3",
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 3,
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("FormalEducationInfos", null, {});
  },
};
