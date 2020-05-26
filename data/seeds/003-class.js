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
          instructor_name: 'subash',
          type: 'yoga',
          intensity: 'high',
          location: 'vegas',
          max_size: 2,
          duration: 1.0
        },
        {
          id: 2,
          name: 'meditation',
          instructor_name: 'sunil',
          type: 'london',
          intensity: 'low',
          location: 'birmingham',
          max_size: 2,
          duration: 1.0
        },
        {
          id: 3,
          name: 'cardio',
          instructor_name: 'kate',
          type: 'cardio',
          intensity: 'medium',
          location: 'japan',
          max_size: 2,
          duration: 1.0
        }
      ]);
    });
};
