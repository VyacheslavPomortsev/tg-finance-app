import pool from './db.js';
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();
const PORT = process.env.PORT || 3000;

// ✅ правильный __dirname для ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.json());

// ✅ раздаём frontend
app.use(express.static(path.join(__dirname, '../public')));

// тестовый API
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok' });
});

pool.query('SELECT 1')
  .then(() => console.log('PostgreSQL connected'))
  .catch(err => console.error('DB error', err));

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});

