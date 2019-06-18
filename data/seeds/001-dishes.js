
exports.seed = async function(knex) {
  await knex('dishes').insert([
        {id: 1, name: 'pancakes'},
        {id: 2, name: 'oatmeal'},
  ]);
};
