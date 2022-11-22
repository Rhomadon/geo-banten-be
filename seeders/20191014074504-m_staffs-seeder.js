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
      "m_staffs",
      [
        {
          name: "Aryanto",
          birth_date: "1991-11-11",
          join_date: "2015-01-31",
          section_id: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Nursidik",
          birth_date: "1990-11-25",
          join_date: "2019-04-20",
          section_id: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Yanto",
          birth_date: "1991-03-09",
          join_date: "2018-08-07",
          section_id: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Sukri",
          birth_date: "1995-04-05",
          join_date: "2018-09-21",
          section_id: 4,
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
    return queryInterface.bulkDelete("m_staffs", null, {});
  }
};
