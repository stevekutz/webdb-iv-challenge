exports.seed = async function(knex) {
  await knex('recipes').insert([
        {id: 1, name: 'Texas', 	    dish_id: 1 },
        {id: 2, name: 'Southern', dish_id: 1 },
        {id: 3, name: 'Wisconsin', dish_id: 1 },
        {id: 4, name: 'Plain', dish_id: 2 },
        {id: 5, name: 'Flax', dish_id: 2 },
  ]);
};
