'use strict';
module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define('Product', {
    name: DataTypes.STRING,
    price: DataTypes.INTEGER,
    picture_source: DataTypes.STRING,
    weight: DataTypes.INTEGER
  }, {});
  Product.associate = function(models) {
    Product.belongsToMany(models.User, {
      through: models.Order
    })
  };
  return Product;
};