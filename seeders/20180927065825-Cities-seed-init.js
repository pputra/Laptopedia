'use strict';
const fs = require('fs');
module.exports = {
  up: (queryInterface, Sequelize) => {

    let citiesJSON = JSON.parse(fs.readFileSync('./API/cities.json', 'utf8'));

    let seeds = [];
    citiesJSON.forEach(city => {
      seeds.push(
        {
          province_id: city.province_id,
          province: city.province,
          type: city.type,
          city_name: city.city_name,
          postal_code: city.postal_code,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      );
    });

    return queryInterface.bulkInsert('Cities', seeds, {});
    
    

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

    return queryInterface.bulkDelete('Cities', null, {});
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
