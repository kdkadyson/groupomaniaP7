//Database connection
const mysql = require("mysql2");
const dbConfig = require("../config/db.config.js");

const connection = mysql.createConnection({
    host: dbConfig.HOST,
    user: dbConfig.USER,
    password: dbConfig.PASSWORD,
    database: dbConfig.DB
});

//Open MySQL connection
connection.connect(error => {
    if (error) throw error;
    console.log("Connection avec DB Mysql réussie.");
});

module.exports = connection;