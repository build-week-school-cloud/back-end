const db = require("../database/dbConfig");

module.exports = {
  find,
  findById,
  add,
  update,
  remove
};

function find() {
  return db("volunteers");
}

function findById(id) {
  return db("volunteers")
    .where({ id })
    .first();
} 

function add(card) {
  return db("volunteers").insert(card, "id");
}

function update(id, changes) {
  return db("volunteers")
    .where({ id })
    .update(changes);
}

function remove(id) {
  return db("volunteers")
    .where({ id })
    .del();
}