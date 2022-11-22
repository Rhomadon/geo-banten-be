'use strict';
const Sequelize = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  const m_section = sequelize.define("m_section", {
      sectionId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      sectionName: {
        type: Sequelize.STRING,
        defaultValue: "",
        allowNull: false,
        unique: {
          args: true,
          msg: "Name Section already exists."
        },
        validate: {
          notEmpty: {
            msg: "Please input name"
          },
          min: {
            args: 3,
            msg: "Name must start with a letter, have no spaces, and be at least 3 characters."
          },
          max: {
            args: 40,
            msg: "Name must start with a letter, have no spaces, and be at less than 40 characters."
          }
          // is: {
          //   args: /^[A-Za-z][A-Za-z0-9-]*\s?[A-Za-z][A-Za-z0-9-]*\s?[A-Za-z][A-Za-z0-9-]+$/gi, // must start with letter and only have letters, numbers, dashes
          //   msg: "Name must start with a letter and be 3 - 40 characters."
          // },
        }
      },
      departmentId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "m_department",
          key: "departmentId"
        }
      },
      departmentName: {
        type: Sequelize.STRING,
        defaultValue: "",
        allowNull: true
      },
      createdAt: {
        type: Sequelize.DATE(),
        allowNull: false,
        defaultValue: Sequelize.NOW
      },
      updatedAt: {
        type: Sequelize.DATE(),
        allowNull: false,
        defaultValue: Sequelize.NOW
      }
    },{
      tableName: 'm_sections'
    });
  m_section.associate = function (models) {
    m_section.belongsTo(models.m_department, {
      as: "m_departments",
      through: {
        model: models.m_department,
        unique: false
      },
      foreignKey: "departmentId"
    });
  };
  return m_section;
};
