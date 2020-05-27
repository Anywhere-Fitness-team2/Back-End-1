exports.up = function(knex) {
  return knex.schema.createTable('type', tbl => {
    tbl.increments();

    tbl
      .string('name')
      .notNullable()
      .index();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('type');
};
