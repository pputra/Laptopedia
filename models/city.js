'use strict';
module.exports = (sequelize, DataTypes) => {
  const City = sequelize.define('City', {
    province_id: {
      type: Sequelize.INTEGER,
      validate: {
        notEmpty: true,
        notNull: true
      }
    },
    province: {
      type: Sequelize.STRING,
      validate: {
        notEmpty: true,
        notNull: true
      }
    },
    type:  {
      type: Sequelize.STRING,
      validate: {
        notEmpty: true,
        notNull: true
      }
    },
    city_name:  {
      type: Sequelize.STRING,
      validate: {
        notEmpty: true,
        notNull: true
      }
    },
    postal_code: {
      type: Sequelize.INTEGER,
      validate: {
        notEmpty: true,
        notNull: true
      }
    }
  }, {});
  City.associate = function(models) {
    City.belongsTo(models.Payment);
  };
  return City;
};