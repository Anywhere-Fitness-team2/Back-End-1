exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('class')
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex('class').insert([
        {
          id: 1,
          name: 'pure yoga',
          instructor_id: 2,
          type: 'yoga',
          intensity: 'high',
          location: 'vegas',
          max_size: 22,
          duration: 1.0
        },
        {
          id: 2,
          name: 'meditation',
          instructor_id: '1',
          type: 'medetation',
          intensity: 'low',
          location: 'birmingham',
          max_size: 12,
          duration: 2.4
        },
        {
          id: 3,
          name: 'cardio running',
          instructor_id: '3',
          type: 'cardio',
          intensity: 'medium',
          location: 'japan',
          max_size: 21,
          duration: 1.13
        }
      ]);
    });
};
