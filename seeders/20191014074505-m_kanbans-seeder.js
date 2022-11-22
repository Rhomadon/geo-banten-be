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
      "m_kanbans",
      [
        {
          code: "THS01",
          name: "THS01",
          description: "desc for THS01",
          project_id: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          code: "THS02",
          name: "THS02",
          description: "desc for THS02",
          project_id: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          code: "THS03",
          name: "THS03",
          description: "desc for THS03",
          project_id: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          code: "THC01",
          name: "THC01",
          description: "desc for THC01",
          project_id: 3,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          code: "H&M01",
          name: "H&M01",
          description: "desc for H&M01",
          project_id: 4,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          code: "H&M02",
          name: "H&M02",
          description: "desc for H&M02",
          project_id: 4,
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
    return queryInterface.bulkDelete("m_kanbans", null, {});
  }
};
