const db = require("../database/dbConfig");

module.exports = {
  find,
  findById,
  findTasks,
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

function findTasks(id) {
    return db("tasks")
      .where("tasks", id);
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