'use strict';
module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define('Product', {
    name: {
      type: Sequelize.STRING,
      validate: {
        notEmpty: true,
        notNull: true
      }
    },
    price:{
      type: Sequelize.INTEGER,
      validate: {
        notEmpty: true,
        notNull: true
      }
    },
    picture_source: {
      type: Sequelize.STRING,
      validate: {
        notEmpty: true,
        notNull: true
      }
    }
  }, {});
  Product.associate = function(models) {
    Product.belongsToMany(models.User, {
      through: models.Order
    })
  };
  return Product;
};