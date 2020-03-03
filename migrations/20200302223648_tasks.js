
exports.up = function(knex) {
    return knex.schema.createTable('tasks', tasks => {
        tasks.increments();
        tasks.string('name', 255).notNullable();
        tasks.string('description').notNullable()
      });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('tasks');
};
