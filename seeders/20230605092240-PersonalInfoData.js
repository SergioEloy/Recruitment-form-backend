"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("PersonalInfos", [
      {
        name: "Sergio",
        last_name: "Espadas",
        second_last_name: "Baños",
        gender: "Male",
        gender_other: "",
        date_of_birth: new Date(),
        city_of_birth: "Mérida",
        state_of_birth: "Yucatán",
        country_of_birth: "Mexico",
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 1,
      },
      {
        name: "Alan",
        last_name: "Villanueva",
        second_last_name: "Perez",
        gender: "Male",
        gender_other: "",
        date_of_birth: new Date(),
        city_of_birth: "Mérida",
        state_of_birth: "Yucatán",
        country_of_birth: "Mexico",
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 2,
      },
      {
        name: "Andy",
        last_name: "Hernandez",
        second_last_name: "Williams",
        gender: "Other",
        gender_other: "Beast Mode",
        date_of_birth: new Date(),
        city_of_birth: "Santo Domingo",
        state_of_birth: "Santo Domingo",
        country_of_birth: "Republica Dominicana",
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 3,
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("PersonalInfos", null, {});
  },
};
