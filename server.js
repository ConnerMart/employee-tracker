const express = require("express");
const mysql = require("mysql2");
const consoleTable = require("console.table"); // ??
const inquirer = require("inquirer");

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const db = mysql.createConnection(
  {
    host: "localhost",
    user: "root",
    password: "", // TODO: PASSWORD HERE
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
        "Quit",
      ],
      name: "mainMenu",
    },
  ]);
  switch (mainResponse.mainMenu) {
    case "View All Departments":
      // THEN I am presented with a formatted table showing department names and department ids
      db.query("SELECT * FROM department", function (err, results) {
        if (err) {
          console.log(err);
          initMainMenu();
        } else {
          console.table(results);
          initMainMenu();
        }
      });
      break;
    case "View All Roles":
      // THEN I am presented with the job title, role id, the department that role belongs to, and the salary for that role
      const roleQuery =
        "SELECT role.title AS job_title, role.id AS role_id, department.dept_name, role.salary FROM role JOIN department ON department.id = role.department_id;";
      db.query(roleQuery, function (err, results) {
        if (err) {
          console.log(err);
          initMainMenu();
        } else {
          console.table(results);
          initMainMenu();
        }
      });
      break;
    case "View All Employees":
      // THEN I am presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to
      const employeeQuery =
        "SELECT employee.id, employee.first_name, employee.last_name, role.title, department.dept_name AS dept_name, role.salary FROM employee LEFT JOIN role ON employee.role_id = role.id LEFT JOIN department ON role.department_id = department.id;";
      db.query(employeeQuery, function (err, results) {
        if (err) {
          console.log(err);
          initMainMenu();
        } else {
          console.table(results);
          initMainMenu();
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
    case "Quit":
      console.log("Ending application");
      process.exit();
  }
}

async function addDept() {
  // THEN that department is added to the database
  const deptResponse = await inquirer.prompt([
    {
      type: "input",
      message: "Enter department name.",
      name: "addDept",
    },
  ]);
  const deptQuery = `INSERT INTO department (dept_name) VALUES ("${deptResponse.addDept}");`;
  db.query(deptQuery, function (err, results) {
    if (err) {
      console.log(err);
      initMainMenu();
    } else {
      initMainMenu();
    }
  });
}

async function addRole() {
  // THEN that role is added to the database
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
      type: "input", // TODO: change to list choice of depts in db
      message: "Enter the role's department.",
      name: "roleDept",
    },
  ]);
  // TODO: add department value
  const roleQuery = `INSERT INTO role (title, salary) VALUES ("${roleResponse.roleName}", "${roleResponse.roleSalary}");`;
  db.query(roleQuery, function (err, results) {
    if (err) {
      console.log(err);
      initMainMenu();
    } else {
      initMainMenu();
    }
  });
}

async function addEmployee() {
  // THEN that employee is added to the database
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
      type: "input", // TODO: change to list choice of roles in db
      message: "Enter employee's role",
      name: "employeeRole",
    },
    {
      type: "input", // TODO: change to list choice of employees in db
      message: "Enter employee's manager",
      name: "employeeManager",
    },
  ]);
  // TODO: add role, manager values
  const employeeQuery = `INSERT INTO employee (first_name, last_name) VALUES ("${employeeResponse.employeeFirst}", "${employeeResponse.employeeLast}");`;
  db.query(employeeQuery, function (err, results) {
    if (err) {
      console.log(err);
      initMainMenu();
    } else {
      initMainMenu();
    }
  });
}

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});
