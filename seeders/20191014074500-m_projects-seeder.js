"use strict";

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
    */
    return queryInterface.bulkInsert(
      "m_projects",
      [
        {
          name: "740B-CSUV",
          description: "desc for 740B CSUV",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "CST",
          description: "desc for CST",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "WLD",
          description: "desc for WLD",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "MSK",
          description: "desc for MSK",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "MES",
          description: "desc for MES",
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
    return queryInterface.bulkDelete("m_projects", null, {});
  }
};
