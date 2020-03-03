
exports.up = function(knex) {
    return knex.schema.createTable('volunteers', volunteers => {
        volunteers.increments();
        volunteers.string('name', 255).notNullable();
        volunteers.string('location').notNullable();
        volunteers.string('subject').notNullable();
        volunteers.time('time').notNullable()
      });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('volunteers');
};
