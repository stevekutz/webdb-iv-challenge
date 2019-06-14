const db = require('../data/dbConfig');

const knex = require('knex'); 

// ALL of these methods resolve to a promise
module.exports = {
    getRecipes,
    addRecipe,
    //getRecipeID,
//    updateRecipe,
//    removeRecipe,
}


function getRecipes() {
    return db('recipes');
}


function addRecipe(newRecipe) {
    return db('recipes')
        .insert('newRecipe');
}