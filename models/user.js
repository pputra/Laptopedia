'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    username: {
      type: Sequelize.STRING,
      validate: {
        notEmpty: true,
        isLowercase: true,
        notNull: true,
        notContains:" "
      }
    },
    password: {
      type: Sequelize.STRING,
      validate: {
        notEmpty: true,
        isAlphanumeric: true,
        notNull: true,
        notContains:" "
      }
    },
    first_name: {
      type: Sequelize.STRING,
      validate: {
        notEmpty: true,
        isAlpha: true,
        notNull: true
      }
    },
    last_name: {
      type: Sequelize.STRING,
      validate: {
        notEmpty: true,
        isAlpha: true,
        notNull: true
      }
    }
  }, {});
  User.associate = function(models) {
    User.belongsToMany(models.Product, {
      through: models.Order
    });
  };
  return User;
};