const db = require("../database/dbConfig");

module.exports = {
  find,
  findById,
  add,
  update,
  remove
};

function find() {
  return db("tasks");
}

function findById(id) {
  return db("tasks")
    .where({ id })
    .first();
} 

function add(task) {
  return db("tasks").insert(task, "id");
}

function update(id, changes) {
  return db("tasks")
    .where({ id })
    .update(changes);
}

function remove(id) {
  return db("tasks")
    .where({ id })
    .del();
}