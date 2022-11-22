"use strict";

const Sequelize = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  const fc_shop = sequelize.define("fc_shop", {
    id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    address: {
      type: Sequelize.STRING,
      defaultValue: "",
      allowNull: true
    },
    amenity: {
      type: Sequelize.STRING,
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
    tableName: 'fc_shops'
  });

  fc_shop.associate = function(models) {
    // associations can be defined here
  };

  return fc_shop;
};
