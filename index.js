const express = require('express')
const app = express()
const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'db',
  user: 'root',
  port : 3306,
  database: 'lpdip01',
  password: 'rtlry'
});
  app.get('/users', function (req, res) {
    connection.query(
      'SELECT * FROM `users`',
      function(err, results, fields) {
        let json = JSON.stringify(results);
          res.json(json)

      }
    );
  })

  app.get('/users/:id', function (req, res) {
    var id = req.params.id;
    connection.query(
      'SELECT * FROM `users` where id = '+id,
      function(err, results, fields) {
          res.json(results)
      }
    );
  })

app.listen(3000, function () { console.log('Lancé') });
