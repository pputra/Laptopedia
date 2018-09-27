'use strict';
module.exports = (sequelize, DataTypes) => {
  const Payment = sequelize.define('Payment', {
    CityId: DataTypes.INTEGER,
    street_address: DataTypes.STRING,
    cost: DataTypes.INTEGER,
    shipping_cost: DataTypes.INTEGER,
    isComplete: DataTypes.BOOLEAN
  }, {});
  Payment.associate = function(models) {
    Payment.hasMany(models.Order);
    Payment.belongsTo(models.City);
  };
  return Payment;
};