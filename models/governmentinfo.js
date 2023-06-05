'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class GovernmentInfo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  GovernmentInfo.init({
    curp: DataTypes.STRING,
    identification_number: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'GovernmentInfo',
  });
  return GovernmentInfo;
};