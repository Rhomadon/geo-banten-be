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
      "m_jobs",
      [
        {
          code: "D1",
          name: "Manhour Data Input",
          description: "desc for D1",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          code: "D2",
          name: "Management Index",
          description: "desc for D2",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          code: "D5",
          name: "Trouble Shooting/Genba",
          description: "desc for D5",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          code: "F1",
          name: "QCC",
          description: "desc for F1",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          code: "F2",
          name: "KYT",
          description: "desc for F2",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          code: "F7",
          name: "5R Activity",
          description: "desc for F7",
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
    return queryInterface.bulkDelete("m_jobs", null, {});
  }
};
