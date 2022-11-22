'use strict';
const Sequelize = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  const m_line = sequelize.define("m_line", {
      lineId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      lineName: {
        type: Sequelize.STRING,
        defaultValue: "",
        allowNull: false,
        unique: {
          args: true,
          msg: ":Line name already exists."
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
      sectionId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "m_section",
          key: "sectionId"
        }
      },
      sectionName: {
        type: Sequelize.STRING,
        defaultValue: "",
        allowNull: true
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
      tableName: 'm_lines'
    });
  m_line.associate = function (models) {
    m_line.belongsTo(models.m_section, {
      as: "m_sections",
      through: {
        model: models.m_section,
        unique: false
      },
      foreignKey: "sectionId"
    });
    m_line.belongsTo(models.m_department, {
      as: "m_departments",
      through: {
        model: models.m_department,
        unique: false
      },
      foreignKey: "departmentId"
    });
  };
  return m_line;
};
