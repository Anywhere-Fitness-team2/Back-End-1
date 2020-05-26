exports.up = function(knex) {
  return knex.schema.createTable('roles', tbl => {
    tbl.increments();

    tbl.string('role').notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('roles');
};
