require('dotenv').config();
const { exec } = require('child_process');
const path = require('path');

function runMigrations(databaseName) {
  return new Promise((resolve, reject) => {
    const migrationsPath = path.resolve(__dirname, '../migrations');
    const command = `npx sequelize-cli db:migrate --url "mysql://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}:${process.env.DB_PORT}/${databaseName}" --migrations-path "${migrationsPath}" --env development`;

    console.log('Running migrations with command:', command);

    exec(command, (error, stdout, stderr) => {
      if (error) {
        console.error('Migration error:', stderr);
        return reject(stderr);
      }
      console.log('Migration output:', stdout);
      resolve(stdout);
    });
  });
}

module.exports = runMigrations;
