const db = require('../data/dbConfig');

const knex = require('knex'); 

// ALL of these methods resolve to a promise
module.exports = {
    getDishes,
    addDish,
    getDishID,
//    updateDish,
//    removeDish,
}


function getDishes() {
    return db('dishes');
}

