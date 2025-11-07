const express = require('express');
const router = express.Router();
const mysql = require('mysql2/promise');
const runMigrations = require('../utils/runMigrations');

router.get('/', (req, res) => {
  res.send('API is running');
});

router.post('/create-database', async (req, res) => {
  const { databaseName } = req.body;
  if (!databaseName) return res.status(400).json({ error: 'Database name required' });

  try {
    // Connect to MySQL
    const connection = await mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS || '',
    });


    // Create the new database
    await connection.query(`CREATE DATABASE IF NOT EXISTS \`${databaseName}\`;`);
    await connection.end();

    // Run migrations
    const output = await runMigrations(databaseName);
    res.json({ message: 'Database created and migrations applied', output });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get('/db-code', async (req, res) => {
  res.json({ code: "axion-001"});
});

module.exports = router;
