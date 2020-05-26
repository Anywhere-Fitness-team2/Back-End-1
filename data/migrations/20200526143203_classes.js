exports.up = function(knex) {
  return knex.schema.createTable('class', tbl => {
    tbl.increments();

    tbl
      .string('instructor_name')
      .notNullable()
      .unique()
      .index();

    tbl
      .string('type')
      .notNullable()
      .unique()
      .index();

    tbl
      .string('intensity')
      .notNullable()
      .index();

    tbl
      .string('location')
      .notNullable()
      .index();

    tbl.integer('max_size').notNullable();
    tbl.float('duration').notNullable();
    tbl.bool('signedUp').defaultTo('false');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('class');
};
