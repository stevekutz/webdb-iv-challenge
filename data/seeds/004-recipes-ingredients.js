
exports.seed = async function(knex) {
  await knex('recipes_ingredients').insert([
        {id: 1, recipe_id: 1, ingredient_id: 1, quantity: 1.2},
        {id: 2, recipe_id: 1, ingredient_id: 2, quantity: .5},
        {id: 3, recipe_id: 1, ingredient_id: 3, quantity: 25},
        {id: 4, recipe_id: 2, ingredient_id: 1, quantity: 1.5},
        {id: 5, recipe_id: 2, ingredient_id: 2, quantity: 0.75},
        {id: 6, recipe_id: 2, ingredient_id: 4, quantity: 8},
        {id: 7, recipe_id: 3, ingredient_id: 1, quantity: 1.3},
        {id: 8, recipe_id: 3, ingredient_id: 2, quantity: .5},
        {id: 9, recipe_id: 3, ingredient_id: 5, quantity: 1.2},
        {id: 10, recipe_id: 4, ingredient_id: 2, quantity: .5},
        {id: 11, recipe_id: 4, ingredient_id: 6, quantity: 1.0},
        {id: 12, recipe_id: 5, ingredient_id: 2, quantity: .5},
        {id: 13, recipe_id: 5, ingredient_id: 6, quantity: 1.0},
        {id: 14, recipe_id: 5, ingredient_id: 7, quantity: .25}
  ]);
};
