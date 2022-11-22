"use strict";
const bcrypt = require("bcryptjs");

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
      bcrypt.hashSync('1234567890', 10);
    */
    return queryInterface.bulkInsert(
      "users",
      [
        {
          username: "admin",
          email: "admin@gmail.com",
          password: bcrypt.hashSync("1234567890", 10),
          api_key: "",
          role: "admin",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          username: "user",
          email: "user@gmail.com",
          password: bcrypt.hashSync("1234567890", 10),
          api_key: "",
          role: "user",
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
    return queryInterface.bulkDelete("users", null, {});
  }
};
