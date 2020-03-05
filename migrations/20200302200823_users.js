
exports.up = function(knex) {
    return knex.schema.createTable('users', users => {
        users.increments();
        users.string('full_name', 255).notNullable();
        users
          .string('username', 255)
          .notNullable()
          .unique();
        users.string('password', 255).notNullable();
        users.string('role').notNullable();
        users.string('email', 255).notNullable()
        users.integer('phone', 10).notNullable()
      });
};
console.log()

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('users');
};
