
exports.seed = async function(knex) {
  await knex('ingredients').insert([
        {id: 1, name: 'cup pancake mix'},
        {id: 2, name: 'cup milk'},
        {id: 3, name: 'cup salsa'},
        {id: 4, name: 'tub butter'},
        {id: 5, name: 'cup cheese'},
        {id: 6, name: 'packet instant oatmeal'},
        {id: 7, name: 'tablespoon flax seeds'},
  ]);
};
