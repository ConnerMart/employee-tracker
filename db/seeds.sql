INSERT INTO department (dept_name)
VALUES
("Sales"),
("Accounting"),
("Human Resources");

INSERT INTO role (title, salary, department_id)
VALUES
("Regional Manager", 75000, 1),
("Salesperson", 50000, 1),
("Junior Salesperson", 40000, 1),
("Accountant", 35000, 2),
("HR Rep", 45000, 3),
("Customer Service Rep", 40000, 3);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
("Michael", "Scott", 1, null),
("Jim", "Halpert", 2, 1),
("Dwight", "Schrute", 2, 1),
("Angela", "Martin", 4, null),
("Oscar", "Martinez", 4, 4),
("Kevin", "Malone", 4, 4),
("Toby", "Flenderson", 5, null),
("Kelly", "Kapoor", 6, null),
("Pete", "Miller", 3, 1);