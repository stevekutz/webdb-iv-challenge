
exports.up = function(knex, Promise) {
    // we created recipes table
return knex.schema.createTable('recipes', tbl => {
// pk called id, auto-incr, int   >> tbl.icrements()  DOES THIS !!!
tbl.increments('pk_recipeID');

// varchar called name, 128 long, unique, not null
tbl.string('recipe', 128)
    .unique()
    .notNullable();
   
tbl.integer('dish_id').unsigned()
    .references('pk_dishID').inTable('dishes')
    .onDelete('RESTRICT')
    .onUpdate('CASCADE');    
})

};

exports.down = function(knex, Promise) {
// remove table with drop
    return knex.schema.dropTableIfExists('recipes');
};
