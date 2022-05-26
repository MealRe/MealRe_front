const mysql = require("mysql");

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "720710",
    database: "oasis"
});

module.exports = db;