
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('volunteers').del()
    .then(function () {
      // Inserts seed entries
      return knex('volunteers').insert([
        {id: 1, name: 'Algebra 2', location: 'Dallas, TX', subject:'Math', time: '7pm' },
        {id: 2, name: 'Algebra 1', location: 'Fort Worth, TX', subject:'Math', time: '7pm'},
        {id: 3, name: 'Trigonometry', location: 'Waco, TX', subject:'Math', time: '7pm'}
      ]);
    });
};
