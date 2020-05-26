const db = require('../data/dbConfig');

module.exports = {
  addUser
};

function addUser(user) {
  return db
    .select('*')
    .from('users')
    .insert(user);
}
