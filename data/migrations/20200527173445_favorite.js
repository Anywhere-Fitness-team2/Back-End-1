exports.up = function(knex) {
  return knex.schema.createTable('favorite', tbl => {
    tbl.increments();

    tbl
      .integer('user_id')
      .notNullable()
      .reference('id')
      .inTable('user')
      .onDelete('RESTRICT')
      .onUpdate('CASCADE');

    tbl
      .integer('class_id')
      .notNullable()
      .reference('id')
      .inTable('class')
      .onDelete('RESTRICT')
      .onUpdate('CASCADE');
  });
};

exports.down = function(knex) {
  return knex.dropTableIfExists('favorite');
};
