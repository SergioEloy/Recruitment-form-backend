"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("BankAccountInfos", [
      {
        acc_number: "78452158",
        clabe: "354897521647",
        bank: "BBVA",
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 1,
      },
      {
        acc_number: "98752365",
        clabe: "95456863",
        bank: "BBVA",
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 2,
      },
      {
        acc_number: "65478545",
        clabe: "2548947",
        bank: "BBVA",
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 3,
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("BankAccountInfos", null, {});
  },
};
