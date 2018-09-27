'use strict';
module.exports = (sequelize, DataTypes) => {
  const Cities = sequelize.define('Cities', {
    province_id: DataTypes.INTEGER,
    province: DataTypes.STRING,
    type: DataTypes.STRING,
    city_name: DataTypes.STRING,
    postal_code: DataTypes.INTEGER
  }, {});
  Cities.associate = function(models) {
    // associations can be defined here
  };
  return Cities;
};