const db = require('../data/dbConfig');

module.exports = {
  addClass,
  getClassById,
  updateClass,
  removeClass
};

function addClass(data) {
  return db
    .select('*')
    .from('class')
    .insert(data);
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

function updateClass(id, changes) {
  return db
    .select('*')
    .from('class')
    .where({id})
    .update(changes);
}

function removeClass(id) {
  return db
    .select('*')
    .from('class')
    .where({id})
    .del();
}
