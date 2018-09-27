'use strict';
module.exports = (sequelize, DataTypes) => {
  const City = sequelize.define('City', {
    province_id: DataTypes.INTEGER,
    province: DataTypes.STRING,
    type: DataTypes.STRING,
    city_name: DataTypes.STRING,
    postal_code: DataTypes.INTEGER
  }, {});

  City.prototype.getFullInfo = function() {
    return `${this.city_name}, ${this.province} ${this.postal_code}`;
  }

  City.associate = function(models) {
    City.hasMany(models.Payment);
  };
  return City;
};