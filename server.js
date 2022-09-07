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
    password: "dE4!62f@", // TODO: PASSWORD HERE
    database: "employees_db",
  },
  console.log("Connected to the employees_db database.")
);

initMainMenu();
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
      // TODO: rewrite query with joins
      db.query("SELECT * FROM department", function (err, results) {
        if (err) {
          console.log(err);
        } else {
          console.table(results);
        }
      });
      break;
    case "View All Roles":
      // THEN I am presented with the job title, role id, the department that role belongs to, and the salary for that role
      // TODO: rewrite query with joins
      db.query("SELECT * FROM role", function (err, results) {
        if (err) {
          console.log(err);
        } else {
          console.table(results);
        }
      });
      break;
    case "View All Employees":
      // THEN I am presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to
      // TODO: rewrite query with joins
      db.query("SELECT * FROM employee", function (err, results) {
        if (err) {
          console.log(err);
        } else {
          console.table(results);
        }
      });
      break;
    case "Add a Department":
      addDept();
      break;
    case "Add a Role":
      addRole();
      break;
    case "Add an Employee":
      addEmployee();
      break;
    case "Update an Employee Role":
      // TODO: THEN I am prompted to select an employee to update and their new role and this information is updated in the database
      break;
  }
}

async function addDept() {
  const deptResponse = await inquirer.prompt([
    {
      type: "input",
      message: "Enter department name.",
      name: "addDept",
    },
  ]);
  // TODO: THEN that department is added to the database
}

async function addRole() {
  const roleResponse = await inquirer.prompt([
    {
      type: "input",
      message: "Enter name of role.",
      name: "roleName",
    },
    {
      type: "input",
      message: "Enter salary for the role.",
      name: "roleSalary",
    },
    {
      type: "input", // TODO: change to list choice?
      message: "Enter the role's department.",
      name: "roleDept",
    },
  ]);
  // TODO: THEN that role is added to the database
}

async function addEmployee() {
  const employeeResponse = await inquirer.prompt([
    {
      type: "input",
      message: "Enter employee's first name",
      name: "employeeFirst",
    },
    {
      type: "input",
      message: "Enter employee's last name",
      name: "employeeLast",
    },
    {
      type: "input", // TODO: change to list choice?
      message: "Enter employee's role",
      name: "employeeRole",
    },
    {
      type: "input", // TODO: change to list choice?
      message: "Enter employee's manager",
      name: "employeeManager",
    },
  ]);
  // TODO: THEN that employee is added to the database
}

// // shows department table in terminal
// db.query("SELECT * FROM department", function (err, results) {
//   console.log(results);
// });
// // shows role table in terminal
// db.query("SELECT * FROM role", function (err, results) {
//   console.log(results);
// });
// // shows employee table in terminal
// db.query("SELECT * FROM employee", function (err, results) {
//   console.log(results);
// });
// // default "not found" response if nothing else works
// app.use((req, res) => {
//   res.status(404).end();
// });

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});
