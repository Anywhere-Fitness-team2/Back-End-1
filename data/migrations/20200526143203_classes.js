exports.up = function(knex) {
  return knex.schema.createTable('class', tbl => {
    tbl.increments();

    tbl
      .string('name')
      .notNullable()
      .unique()
      .index();

    tbl
      .integer('instructor_id')
      .notNullable()
      .unique()
      .references('id')
      .inTable('instructor')
      .onDelete('RESTRICT')
      .onUpdate('CASCADE');

    tbl
      .integer('type_id')
      .notNullable()
      .unique()
      .references('id')
      .inTable('type')
      .onDelete('RESTRICT')
      .onUpdate('CASCADE');

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
    tbl.integer('current_members').defaultTo(0);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('class');
};
