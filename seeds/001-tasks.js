
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tasks').del()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        {id: 1, name: 'Teach Algebra 2', description: 'Teach to a class of 20 students for 1.5 hours'},
        {id: 2, name: 'Teach Trigonometry', description: 'Teach to a class of 20 students for 1.5 hours'},
        {id: 3, name: 'Teach Calculus', description: 'Teach to a class of 20 students for 1.5 hours'}
      ]);
    });
};
