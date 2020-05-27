const db = require('../data/dbConfig');

module.exports = {
  addUser,
  getUsers,
  findBy,
  getClassById,
  getClassType,
  getClass
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

function getClass() {
  return db.select('*').from('class');
}

function getClassById(id) {
  return db
    .select('*')
    .from('class')
    .where({id})
    .first();
}

function getClassType(type) {
  return db
    .select('*')
    .from('class as c')
    .join('type', 'c.type_id', 't.id')
    .where('name', type);
}
