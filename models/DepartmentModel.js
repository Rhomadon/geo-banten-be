"use strict";

const Sequelize = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  const m_department = sequelize.define("m_department", {
    departmentId: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    departmentName: {
      type: Sequelize.STRING,
      defaultValue: "",
      allowNull: false,
      unique: {
        args: true,
        msg: "Department name already exists."
      },
      validate: {
        notEmpty: {
          msg: "Please input department name"
        },
        min: {
          args: 3,
          msg:
            "Department name must start with a letter, have no spaces, and be at least 3 characters."
        },
        max: {
          args: 40,
          msg:
            "Department name must start with a letter, have no spaces, and be at less than 40 characters."
        }
        // is: {
        //   args: /^[A-Za-z][A-Za-z0-9-]*\s?[A-Za-z][A-Za-z0-9-]*\s?[A-Za-z][A-Za-z0-9-]+$/gi, // must start with letter and only have letters, numbers, dashes
        //   msg:
        //     "Department name must start with a letter and be 3 - 40 characters."
        // }
      }
    },
    createdAt: {
      type: Sequelize.DATE(),
      allowNull: false
    },
    updatedAt: {
      type: Sequelize.DATE(),
      allowNull: false
    }
  },{
    tableName: 'm_departments'
  });

  m_department.associate = function(models) {
    // associations can be defined here
  };

  return m_department;
};
