'use strict';

const orm = require('../config/orm.js');

class Burger {
  getAll(cb) {
    orm.selectAll('burgers', cb);
  }

  create(name, cb) {
    orm.insertOne('burgers', ['burger_name'], [name], cb);
  }

  update(id, cb) {
    orm.updateOne('burgers', { devoured: true }, `id=${id}`, cb);
  }
}

module.exports = new Burger();
