const db = require('../data/dbConfig');

module.exports = {
  addUser,
  getUsers
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
