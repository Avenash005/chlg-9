const express = require('express');
const cors = require('cors');
const Database = require('better-sqlite3');

const app = express();
app.use(cors());
app.use(express.json());

const db = new Database('data.db');

// table
db.prepare(`
CREATE TABLE IF NOT EXISTS bugs (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  title TEXT,
  fix TEXT,
  date TEXT
)
`).run();

// health
app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

// CREATE
app.post('/bugs', (req, res) => {
  const { title, fix, date } = req.body;
  const result = db.prepare(
    'INSERT INTO bugs (title, fix, date) VALUES (?, ?, ?)'
  ).run(title, fix, date);

  res.json({ id: result.lastInsertRowid });
});

// READ
app.get('/bugs', (req, res) => {
  const bugs = db.prepare('SELECT * FROM bugs').all();
  res.json(bugs);
});

// UPDATE
app.put('/bugs/:id', (req, res) => {
  const { title, fix, date } = req.body;

  db.prepare(
    'UPDATE bugs SET title=?, fix=?, date=? WHERE id=?'
  ).run(title, fix, date, req.params.id);

  res.json({ success: true });
});

// DELETE
app.delete('/bugs/:id', (req, res) => {
  db.prepare('DELETE FROM bugs WHERE id=?')
    .run(req.params.id);

  res.json({ success: true });
});

app.listen(3000, () => console.log('Server running on 3000'));