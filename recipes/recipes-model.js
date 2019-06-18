const db = require('../data/dbConfig');

const knex = require('knex'); 

// ALL of these methods resolve to a promise
module.exports = {
    getRecipes,
    addRecipe,
    getRecipeID,
//    updateRecipe,
//    removeRecipe,
}

/*
function getRecipes() {
    return db('recipes');   // by itself just returns recipe with id of dish
}
*/
function getRecipes() {
    return db
    .select('r.id as id', 'r.name as name', 'd.name as dish')
    .from('recipes as r')
    .innerJoin('dishes as d', 'r.dish_id', 'd.id')
     .orderBy('name','dish'); // upper/lowercase afects ordering !!!!
}



function addRecipe(newRecipe) {
    return db('recipes')
        .insert(newRecipe)
        .then(ids => ({id: ids[0]}));;
}

/*
function getRecipeID(id) {
    return db
        .select('r.id', 'd.name as dish', 'r.name as recipe', 'r_i.quantity', 'i.name as ingredient')
        .from('recipes_ingredients as r_i')
        .join('recipes as r', 'r.id', 'r_i.recipe_id')
        .join('dishes as d', 'r.dish_id', 'd.id')
        .leftJoin('ingredients as i', 'r_i.ingredient_id', 'i.id')        
       // .where('r_i.recipe_id', Number(id));
       .where('r_i.recipe_id', id);   // not always needed
}
*/

// refactored
async function getRecipeID(id) {

    const recipe =  await db
        .select('r.id', 'd.name as dish', 'r.name as recipe')
        .from('recipes as r')
        .join('dishes as d', 'd.id', 'r.dish_id')   
        .where('r.id', id);

    const ingredients = await db
        .select('ri.quantity', 'i.name as ingredient')
        .from('recipes_ingredients as ri')
        .join('ingredients as i', 'ri.ingredient_id', 'i.id')
        .where('ri.recipe_id', id)
        .orderBy('ingredient');
    
    return {...recipe[0], ingredients: ingredients};
    
}
