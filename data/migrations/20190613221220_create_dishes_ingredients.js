
exports.up = function(knex, Promise) {
      // we created ingredients table
return knex.schema.createTable('ingredients', tbl => {
    // pk called id, auto-incr, int   >> tbl.icrements()  DOES THIS !!!
    tbl.increments('pk_ingredientID');

    // varchar called name, 128 long, unique, not null
    tbl.string('ingredient', 128)
        .unique()
        .notNullable();

    tbl.float('quantity').notNullable();

    tbl.integer('recipe_id').unsigned()
        .references('pk_recipeID').inTable('recipes')
        .onDelete('RESTRICT')
        .onUpdate('CASCADE');    
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('ingredients')
};
