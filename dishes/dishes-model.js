const knex = require('knex');
const knexConfig = require('../knexfile.js');
const db = knex(knexConfig.development);


module.exports = {
    getDishes,
    addDish,
    getDish,
//    updateDish,
//    removeDish,
}


function getDishes() {
    return db('dishes');
}

function getDish(id) {
       // return db('dishes')
       // .where('id', id);
       return db
        .select('dishes.id', 'dishes.name as dish', 'recipes.name as recipe')
        .from('dishes')
        .leftJoin('recipes', 'dishes.id', 'recipes.dish_id')
        .where('dishes.id', Number(id));
    
}


// FIX !!!!!
function addDish(newDish) {
    return db('dishes')
        .insert(newDish)
        .then(ids => ({id: ids[0]}));
}