'use strict';
module.exports = (sequelize, DataTypes) => {
  const Payment = sequelize.define('Payment', {
    CityId: {
      type: Sequelize.INTEGER,
      validate: {
        notEmpty: true,
        notNull: true,
        isNumeric: true
      }
    },
    street_address: {
      type: Sequelize.STRING,
      validate: {
        notEmpty: true,
        notNull: true
      }
    },
    cost:{
      type: Sequelize.INTEGER,
      validate: {
        notEmpty: true,
        notNull: true
      }
    },
    shipping_cost: {
      type: Sequelize.INTEGER,
      validate: {
        notEmpty: true,
        notNull: true 
      }
    },
    isComplete: {
      type: Sequelize.BOOLEAN,
      validate: {
        notEmpty: true,
        notNull: true
      }
    }
  }, {});
  Payment.associate = function(models) {
    Payment.belongsTo(models.Order);
    Payment.hasMany(models.CityId);
  };
  return Payment;
};