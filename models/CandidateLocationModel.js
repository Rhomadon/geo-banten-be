"use strict";

const Sequelize = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  const candidate_location = sequelize.define("candidate_location", {
    location_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    location_name: {
      type: Sequelize.STRING,
      defaultValue: "",
      allowNull: true
    },
    address: {
      type: Sequelize.STRING,
      defaultValue: "",
      allowNull: true
    },
    lat: {
      type: Sequelize.FLOAT,
      defaultValue: "",
      allowNull: true
    },
    long: {
      type: Sequelize.FLOAT,
      defaultValue: "",
      allowNull: true
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
    tableName: 'candidate_locations'
  });

  candidate_location.associate = function(models) {
    // associations can be defined here
  };

  return candidate_location;
};
