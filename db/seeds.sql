INSERT INTO department (id, dept_name)
VALUES
(1, "Engineering"),
(2, "Sales"),
(3, "Human Resources");

INSERT INTO role (id, title, salary, department_id)
VALUES
(1, "Developer", 50.000, 1),
(2, "Salesperson", 40.000, 2),
(3, "Junior Salesperson", 35.000, 2),
(4, "HR Rep", 45.000, 3);

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES
(1, "Jane", "Doe", 1, null), -- manager of engineering
(2, "John", "Smith", 1, 1),
(3, "Jim", "Washington", 4, null); -- manager of HR