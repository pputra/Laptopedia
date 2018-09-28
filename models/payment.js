'use strict';
module.exports = (sequelize, DataTypes) => {
  const Payment = sequelize.define('Payment', {
    CityId: DataTypes.INTEGER,
    street_address: DataTypes.STRING,
    cost: DataTypes.INTEGER,
    shipping_cost: DataTypes.INTEGER,
    isComplete: DataTypes.BOOLEAN
  }, {
    hooks: {
      afterCreate(instance, options) {
        sequelize.models.Order.findAll({where:{PaymentId:null}})
          .then((orders) => {
            orders.forEach(order => {
              order.PaymentId = instance.id;
              console.log(order);
              order.save();
              console.log(order);
            });
          }).catch((err) => {
            
          });
      }
    }
  });
  Payment.associate = function(models) {
    Payment.hasMany(models.Order);
    Payment.belongsTo(models.City);
  };
  return Payment;
};