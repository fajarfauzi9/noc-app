const { Pool } = require('pg');

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'noc_db',
    password: 'qwerty54321',
    port: 5432,
});

module.exports = pool;