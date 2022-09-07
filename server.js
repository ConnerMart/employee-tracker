const express = require("express");
const mysql = require("mysql2");
const consoleTable = require("console.table");

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const db = mysql.createConnection(
  {
    host: "localhost",
    user: "root",
    password: "",
    database: "employees_db",
  },
  console.log("Connected to the employees_db database.")
);

db.query("SELECT * FROM department", function (err, results) {
  console.log(results);
});

db.query("SELECT * FROM role", function (err, results) {
  console.log(results);
});

db.query("SELECT * FROM employee", function (err, results) {
  console.log(results);
});

app.use((req, res) => {
  res.status(404).end();
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});
