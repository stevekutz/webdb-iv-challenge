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

function getDishID(id) {
    return db('dishes')
        .where('id', id);

}

function addDish(newDish) {
    return db('dishes')
        .insert('newDish');
}