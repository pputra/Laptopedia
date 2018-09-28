'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    username: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: true,
        notContains:" ",
        isAlphanumeric: true,
        //username unik, belum di tes kalo email hasil edit
        isEven(value, callback) {
          sequelize.models
            .User
              .findOne({
                where: {username: value}
              })
              .then(result => {
                if (result !== null){
                  callback('username sudah ada') // validasi ini gagal ketika lu masukin data apapun ( catch )
                } else {
                  callback() // ketika ga ngirim apa apa dianggap validasi berhasil (then  )
                }
              })
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      validate: {
        //Password (UpperCase, LowerCase, Number/SpecialChar and min 8 Chars)
        isEven(value, callback) {
          let reGex = /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/
          if (reGex.test(value)){
            callback()
          } else {
            callback('isi password harus terdapat upperCase, lowerCase, number/specialchar and min 8 Chars')
          }
        },
        notEmpty: true,
        notContains:" "
        
      }
    },
    first_name: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: true,
        isAlpha: true, 
        notContains:" "
      }
    },
    last_name: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: true,
        isAlpha: true, 
        notContains:" "
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