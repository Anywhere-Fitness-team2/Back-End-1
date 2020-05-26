const db = require('../data/dbConfig');

module.exports = {
  addClass
};

function addClass(data) {
  return db
    .select('*')
    .from('class')
    .insert(data);
}
