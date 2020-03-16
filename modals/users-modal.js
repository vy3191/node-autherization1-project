const db = require('../data/config');

async function find() {
  const users = await db('users').select();
  return users;
}

async function findById(id) {
   const user = await db('users')
                      .where({id})
                      .select("id", "username", "password")
                      .first();
  return user;                      
}

function findBy(filter) {
   return  db('users').select("id", "username", "password").where(filter);
                          
};

async function add(user) {
   const [id] = await db('users').insert(user);
   const newUser = await db('users').where({id}).select().first();
   return newUser;
}

module.exports = {
   find, add , findBy, findById
}