exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('type')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('type').insert([
        {id: 1, name: 'meditation'},
        {id: 2, name: 'cardio'},
        {id: 3, name: 'swimming'}
      ]);
    });
};
