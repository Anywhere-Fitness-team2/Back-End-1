exports.up = function(knex) {
  return knex.schema.createTable('user', tbl => {
    tbl.increments();

    tbl.string('name').notNullable();

    tbl
      .string('email')
      .notNullable()
      .unique();

    tbl
      .string('username')
      .notNullable()
      .unique()
      .index();

    tbl.string('password').notNullable();

    tbl
      .integer('role_id')
      .notNullable()
      .references('id')
      .inTable('roles')
      .onDelete('RESTRICT')
      .onUpdate('CASCADE');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('user');
};
