'use strict';
module.exports = (sequelize, DataTypes) => {
  const City = sequelize.define('City', {
    province_id: DataTypes.INTEGER,
    province: DataTypes.STRING,
    type: DataTypes.STRING,
    city_name: DataTypes.STRING,
    postal_code: DataTypes.INTEGER
  }, {});
  City.associate = function(models) {
    // associations can be defined here
  };
  return City;
};