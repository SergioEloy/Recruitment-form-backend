'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Address extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Address.init({
    street: DataTypes.STRING,
    in_between_street_a: DataTypes.STRING,
    in_between_street_b: DataTypes.STRING,
    city: DataTypes.STRING,
    state: DataTypes.STRING,
    country: DataTypes.STRING,
    zip: DataTypes.STRING,
    proof_of_address: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Address',
  });
  return Address;
};