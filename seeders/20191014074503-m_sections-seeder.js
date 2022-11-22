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
      "m_sections",
      [
        {
          name: "CADCAM [Red]",
          description: "desc for CADCAM [Red]",
          department_id: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "CADCAM [White]",
          description: "desc for CADCAM [White]",
          department_id: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Dies Engineering",
          description: "desc for Dies Engineering",
          department_id: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Finishing [R]",
          description: "desc for Finishing [R]",
          department_id: 3,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Accessories",
          description: "desc for Accessories",
          department_id: 3,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Prototypeing",
          description: "desc for Prototypeing",
          department_id: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Small Machine [R]",
          description: "desc for Small Machine [R]",
          department_id: 4,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "BIG Machine [R]",
          description: "desc for BIG Machine [R]",
          department_id: 4,
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
    return queryInterface.bulkDelete("m_sections", null, {});
  }
};
