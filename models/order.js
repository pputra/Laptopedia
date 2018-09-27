'use strict';
module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define('Order', {
    UserId: {
      type: Sequelize.INTEGER,
      validate: {
        notEmpty: true,
        notNull: true
      }
    },
    ProductId: {
      type: Sequelize.INTEGER,
      validate: {
        notEmpty: true,
        notNull: true
      }
    },
    price: {
      type: Sequelize.INTEGER,
      validate: {
        notEmpty: true,
        notNull: true
      }
    },
    quantity: {
      type: Sequelize.INTEGER,
      validate: {
        notEmpty: true,
        notNull: true
      }
    },
    PaymentId: {
      type: Sequelize.INTEGER,
      validate: {
        notEmpty: true,
        notNull: true
      }
    }
  }, {});
  Order.associate = function(models) {
    Order.belongsTo(models.User, {onDelete: 'cascade'});
    Order.belongsTo(models.Product, {onDelete: 'cascade'});
    Order.hasMany(models.Payment);
  };
  return Order;
};