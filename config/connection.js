'use strict';

const mysql = require('mysql');

const connection = mysql.createConnection(process.env.JAWSDB_URL || {
  host: 'localhost',
  user: 'root',
  password: 'clearyourhead!@#123',
  database: 'burgers_db'
});

connection.connect(err => {
  if (err) {
    console.error('error connecting: ' + err.stack);
  } else {
    console.log('connected as id ' + connection.threadId);
  }
});

module.exports = connection;
