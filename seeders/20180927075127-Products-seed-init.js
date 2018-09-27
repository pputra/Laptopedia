'use strict';
const productsJSON = require('../seed_src/products.json');
module.exports = {
  up: (queryInterface, Sequelize) => {

    let seeds = [];

    productsJSON.forEach(product => {
      seeds.push({
        name: product.name,
        price: product.price,
        picture_source: product.pic_src,
        createdAt: new Date(),
        updatedAt: new Date()
      })
    });

    return queryInterface.bulkInsert('Products', seeds, {});


    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('Products', null, {});
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
