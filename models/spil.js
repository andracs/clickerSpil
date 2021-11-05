'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Spil extends Model {
    static associate(models) {
      // define association here
    }
  };
  Spil.init({
    name: {
      type: DataTypes.STRING
    },
    gulerod: {
      type: DataTypes.INTEGER
    },
    cash: {
      type: DataTypes.INTEGER
    },
    poser: {
      type: DataTypes.INTEGER
    }, 
    maskiner: {
      type: DataTypes.INTEGER
    }
  }, {
    sequelize,
    modelName: 'Spil',
  });
  return Spil;
};

