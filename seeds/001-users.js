
exports.seed = function(knex) {
  
  return knex('tasks').del()
    .then(function () {
      return knex('tasks').insert([
        {id: 1, name: 'Algebra Tutoring', description: 'Algebra 1 tutoring for 20 kids'},
        {id: 2, name: 'Trig Tutoring', description: 'Trig tutoring for 20 kids'},
        {id: 3, name: 'Calc Tutoring', description: 'Calc tutoring for 20 kids'}
      ]);
    });
};
