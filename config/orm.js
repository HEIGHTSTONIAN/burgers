'use strict';

const connection = require('./connection');

class ORM {
  selectAll(tableInput, cb) {
    const query = 'SELECT * FROM ' + tableInput + ';';
    connection.query(query, cb);
  }

  insertOne(tableName, columns, values, cb) {
    const query = `
      INSERT INTO ${tableName} (${columns.join(', ')})
      VALUES (${values.map(_ => `"${_}"`).join(', ')})
    `;
    connection.query(query, cb);
  }

  updateOne(tableName, pairs, condition, cb) {
    const query = `
      UPDATE ${tableName}
      SET ${this._pairsToStr(pairs)}
      WHERE ${condition}
    `;
    connection.query(query, cb);
  }

  _pairsToStr(pairs) {
    return Object.keys(pairs).reduce((strArr, pairKey) => {
      return strArr.concat(pairKey + '=' + pairs[pairKey]);
    }, []).join(', ');
  }
}

module.exports = new ORM();
