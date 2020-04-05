
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('users').truncate();
  await knex('users').insert([
    {'username': 'venkat', 'password':'12345'},
    {'username':'venky', 'password':'abc123'}
  ])
};
