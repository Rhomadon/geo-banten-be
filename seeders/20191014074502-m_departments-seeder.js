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
      "m_departments",
      [
        {
          name: "TCS",
          description: "desc for TCS",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "PDD",
          description: "desc for PDD",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "PDF|R,Non",
          description: "desc for PDF|R,Non",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "PDF|W,Non",
          description: "desc for PDF|W,Non",
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
    return queryInterface.bulkDelete("m_departments", null, {});
  }
};
