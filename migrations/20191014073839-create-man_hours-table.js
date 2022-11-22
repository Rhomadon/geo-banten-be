"use strict";
module.exports = {
  // eslint-disable-next-line
  up: async (queryInterface, Sequelize) =>
    await queryInterface.createTable("man_hours", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      staff_id: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      date_manhours: {
        allowNull: true,
        type: Sequelize.DATEONLY
      },
      job_id: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      project_id: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      kanban_id: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      item_name: {
        type: Sequelize.STRING,
        allowNull: true
      },
      man_hour: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: false
      },
      job_detail: {
        type: Sequelize.STRING,
        allowNull: true
      },
      note: {
        type: Sequelize.STRING,
        allowNull: true
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    }),
  down: queryInterface => queryInterface.dropTable("man_hours")
};
