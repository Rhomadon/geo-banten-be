"use strict";

const Sequelize = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  const m_user = sequelize.define("m_user", {
    id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    username: {
      type: Sequelize.STRING,
      defaultValue: "",
      allowNull: false,
      unique: {
        args: true,
        msg: "Username already in use"
      },
      validate: {
        notEmpty: {
          msg: "Please input Username"
        },
        min: {
          args: 3,
          msg:
            "Username must start with a letter, have no spaces, and be at least 3 characters."
        },
        max: {
          args: 40,
          msg:
            "Username must start with a letter, have no spaces, and be at less than 40 characters."
        }
        // is: {
        //   args: /^[A-Za-z][A-Za-z0-9-]*\s?[A-Za-z][A-Za-z0-9-]*\s?[A-Za-z][A-Za-z0-9-]+$/gi, // must start with letter and only have letters, numbers, dashes
        //   msg: "Username must start with a letter and be 3 - 40 characters."
        // }
      }
    },
    password: {
      type: Sequelize.STRING,
      defaultValue: "",
      allowNull: false,
      validate: {
        min: {
          args: 6,
          msg: "Password start and be at least 6 characters."
        },
        notEmpty: {
          msg: "Please input password"
        }
      }
    },
    api_key: {
      type: Sequelize.STRING,
      defaultValue: "",
      allowNull: true
    },
    staffRole: {
      type: Sequelize.STRING,
      defaultValue: "",
      allowNull: false
    },
    staffName: {
      type: Sequelize.STRING,
      defaultValue: "",
      allowNull: true
    },
    lineId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: "m_line",
        key: "lineId"
      }
    },
    lineName: {
      type: Sequelize.STRING,
      defaultValue: "",
      allowNull: true
    },
    sectionId: {
      type: DataTypes.INTEGER,
      allowNull: true,
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
      allowNull: true,
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
    groupName: {
      type: Sequelize.STRING,
      defaultValue: "",
      allowNull: true
    },
    isAdmin: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    isLineHead: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    isSectionHead: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    email: {
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
      tableName: 'm_users'
  });

  m_user.associate = function(models) {
    // associations can be defined here
    m_user.belongsTo(models.m_line, {
      as: "m_lines",
      through: {
        model: models.m_line,
        unique: false
      },
      foreignKey: "lineId"
    });
    m_user.belongsTo(models.m_section, {
      as: "m_sections",
      through: {
        model: models.m_section,
        unique: false
      },
      foreignKey: "sectionId"
    });
    m_user.belongsTo(models.m_department, {
      as: "m_departments",
      through: {
        model: models.m_department,
        unique: false
      },
      foreignKey: "departmentId"
    });
  };

  return m_user;
};
