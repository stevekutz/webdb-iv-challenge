
exports.up = function(knex, Promise) {
  return knex.schema.createTable('dishes', tbl => {
      tbl.increments('pk_dishID');

      tbl.string('dish', 128)
      .unique()
      .notNullable();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('dishes');
};
