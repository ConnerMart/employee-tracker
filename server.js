const express = require("express");
const mysql = require("mysql2");
const consoleTable = require("console.table");
const inquirer = require("inquirer");

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

// async and AWAIT responses in inquirer
async function initMainMenu() {
  const mainResponse = await inquirer.prompt([
    {
      type: "list",
      message: "What would you like to do?",
      choices: [
        "View All Departments",
        "View All Roles",
        "View All Employees",
        "Add a Department",
        "Add a Role",
        "Add an Employee",
        "Update an Employee Role",
      ],
      name: "mainMenu",
    },
  ]);
  switch (mainResponse.mainMenu) {
    case "View All Departments":
      // THEN I am presented with a formatted table showing department names and department ids
      break;
    case "View All Roles":
      // THEN I am presented with the job title, role id, the department that role belongs to, and the salary for that role
      break;
    case "View All Employees":
      // THEN I am presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to
      break;
    case "Add a Department":
      // THEN I am prompted to enter the name of the department and that department is added to the database
      break;
    case "Add a Role":
      // THEN I am prompted to enter the name, salary, and department for the role and that role is added to the database
      break;
    case "Add an Employee":
      // THEN I am prompted to enter the employee’s first name, last name, role, and manager, and that employee is added to the database
      break;
    case "Update an Employee Role":
      // THEN I am prompted to select an employee to update and their new role and this information is updated in the database
      break;
  }
}
initMainMenu();

// shows department table in terminal
db.query("SELECT * FROM department", function (err, results) {
  console.log(results);
});

// shows role table in terminal
db.query("SELECT * FROM role", function (err, results) {
  console.log(results);
});

// shows employee table in terminal
db.query("SELECT * FROM employee", function (err, results) {
  console.log(results);
});

// default "not found" response if nothing else works
app.use((req, res) => {
  res.status(404).end();
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});
