
exports.seed = function(knex) {
  
  return knex('users').del()
    .then(function () {
      return knex('users').insert([
        {id: 1, full_name: 'Maggie Price', username: 'maggie12', password:'test', role: 'administrator', email: 'a@a.com', phone: 1234567891},
        {id: 2, full_name: 'Justin Price', username: 'justin12', password:'test', role: 'student', email: 'a@a.com', phone: 1234567891},
        {id: 3, full_name: 'Brielle Price', username: 'brielle12', password:'test', role: 'volunteer', email: 'a@a.com', phone: 1234567891}
      ]);
    });
};
