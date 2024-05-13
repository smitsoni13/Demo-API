const Pool = require('pg').Pool;

const pool = new Pool ({
    user: "root",
    host: "localhost",
    database: "db",
    password: "root",
    port: 5432
});

module.exports = pool;
