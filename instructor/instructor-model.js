const db = require('../data/dbConfig');

module.exports = {
  addClass,
  getClass
};

function addClass(data) {
  return db
    .select('*')
    .from('class')
    .insert(data);
}
