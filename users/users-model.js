const db = require('../data/dbConfig');

module.exports = {
  addUser,
  getUsers,
  findBy
};

function addUser(user) {
  return db
    .select('*')
    .from('user')
    .insert(user);
}

function getUsers() {
  return db.select('*').from('user');
}

function findBy(user) {
  return db
    .select('*')
    .from('user')
    .where(user);
}
