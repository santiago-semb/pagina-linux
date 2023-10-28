const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2');

const app = express();
const port = process.env.PORT || 3000;
const cors = require('cors');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors())

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'api_linux'
});

db.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    return;
  }
  console.log('Connected to MySQL database');
});

// Define tus rutas y lógica de API aquí

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});


app.get('/comandos', (req, res) => {
    const query = 'SELECT * FROM comandos ORDER BY nombre ASC';
  
    db.query(query, (err, result) => {
      if (err) {
        console.error('Error executing MySQL query:', err);
        res.status(500).json({ error: 'Error retrieving data from database' });
        return;
      }
      res.json(result);
    });
});

app.get('/get-comando/:nombre', (req, res) => {
  nombre = req.params.nombre
  const query = `SELECT * FROM comandos WHERE nombre='${nombre}'`

  db.query(query, (err, result) => {
    if (err) {
      console.error('Error executing MySQL query:', err);
      res.status(500).json({ error: 'Error retrieving data from database' });
      return;
    }
    res.json(result);
  });
});

app.get('/get-tags', (req, res) => {
  const query = 'SELECT * FROM tags';

  db.query(query, (err, result) => {
    if (err) {
      console.error('Error executing MySQL query:', err);
      res.status(500).json({ error: 'Error retrieving data from database' });
      return;
    }
    res.json(result);
  });
});

app.get('/get-tag/:comando', (req, res) => {
  comando = req.params.comando
  const query = `SELECT * FROM tags WHERE comando='${comando}'`

  db.query(query, (err, result) => {
    if (err) {
      console.error('Error executing MySQL query:', err);
      res.status(500).json({ error: 'Error retrieving data from database' });
      return;
    }
    res.json(result);
  });
});

app.post('/set-comando', (req, res) => {
    nombre = req.body.nombre
    descripcion = req.body.descripcion
    categoria = req.body.categoria
    const query = `INSERT INTO comandos (nombre, descripcion, categoria) VALUES ('${nombre}','${descripcion}','${categoria}')`;
    db.query(query, (err, result) => {
      if (err) {
        console.error('Error executing MySQL query:', err);
        res.status(500).json({ error: 'Error retrieving data from database' });
        return;
      }
      res.json(result);
    });
    console.log(req.body)
});

app.post('/set-tag', (req, res) => {
  tag = req.body.tag
  comando = req.body.comando
  descripcion = req.body.descripcion
  const query = `INSERT INTO tags (tagg, comando, descripcion) VALUES ('${tag}','${comando}','${descripcion}')`;
  db.query(query, (err, result) => {
    if (err) {
      console.error('Error executing MySQL query:', err);
      res.status(500).json({ error: 'Error retrieving data from database' });
      return;
    }
    res.json(result);
  });
  console.log(req.body)
});

app.delete('/delete-comando/:id', (req, res) => {
    id = req.params.id
    const query = `DELETE FROM comandos WHERE id=${id}`;
    db.query(query, (err, result) => {
      if (err) {
        console.error('Error executing MySQL query:', err);
        res.status(500).json({ error: 'Error retrieving data from database' });
        return;
      }
      res.json(result);
    });
    console.log(req.body)
});

app.put('/update-comando/:id', (req, res) => {
    id = req.params.id
    nombre = req.body.nombre
    descripcion = req.body.descripcion
    categoria = req.body.categoria
    const query = `UPDATE comandos SET nombre='${nombre}', descripcion='${descripcion}', categoria='${categoria}' WHERE id=${id}`;
    db.query(query, (err, result) => {
      if (err) {
        console.error('Error executing MySQL query:', err);
        res.status(500).json({ error: 'Error retrieving data from database' });
        return;
      }
      res.json(result);
    });
    console.log(req.body)
});