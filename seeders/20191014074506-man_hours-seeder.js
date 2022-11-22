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
      "man_hours",
      [
        {
          staff_id: 1,
          date_manhours: "2019-11-11",
          job_id: 2,
          project_id: 2,
          kanban_id: 2,
          item_name: "Desaining prototype",
          man_hour: 3.5,
          job_detail: "Desain with software",
          note: "Please desain very carefully",
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
    return queryInterface.bulkDelete("man_hours", null, {});
  }
};
