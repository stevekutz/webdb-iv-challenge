//  we can build all tables all at once here

exports.up = async function(knex) {
    await knex.schema.createTable('dishes', tbl => {
        tbl.increments('id');
        tbl.string('name').unique().notNullable();
    })
    await knex.schema.createTable('recipes', tbl => {
        tbl.increments('id');
        tbl.string('name').unique().notNullable();
        tbl
            .integer('dish_id')    // FK
            .references('id')       // PK reference by FK
            .inTable('dishes')    // table referenced by FK
            .onDelete('CASCADE')   // we could make this RESTRICT
            .onUpdate('CASCADE')
            .notNullable();
    })
    await knex.schema.createTable('ingredients', tbl => {
        tbl.increments('id');
        tbl.string('name').unique().notNullable();
    })
    await knex.schema.createTable('recipes_ingredients', tbl => {
        tbl.increments('id');
        tbl
            .integer('recipe_id')
            .references('id')           // PK reference by FK
            .inTable('recipes')       // table referenced by FK
            .onDelete('CASCADE')
            .onUpdate('CASCADE')
            .notNullable();
        tbl
            .integer('ingredient_id')
            .references('id')              // PK reference by FK
            .inTable('ingredients')    // table referenced by FK
            .onDelete('CASCADE')
            .onUpdate('CASCADE')
            .notNullable();
        tbl
            .float('quantity').notNullable();
    })
};

exports.down = async function(knex) {
	// !!!!   do these reverse order from how added !!!
    await knex.schema.dropTableIfExists('recipes_ingredients');
    await knex.schema.dropTableIfExists('ingredients');
    await knex.schema.dropTableIfExists('recipes');
    await knex.schema.dropTableIfExists('dishes');
};
