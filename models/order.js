'use strict';
module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define('Order', {
    UserId: DataTypes.INTEGER,
    ProductId: DataTypes.INTEGER,
    price: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER,
    PaymentId: DataTypes.INTEGER
  }, {});
  Order.associate = function(models) {
    Order.belongsTo(models.User, {onDelete: 'cascade'});
    Order.belongsTo(models.Product, {onDelete: 'cascade'});
    Order.belongsTo(models.Payment);
  };
  return Order;
};