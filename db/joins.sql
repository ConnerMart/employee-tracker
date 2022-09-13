-- -- THEN I am presented with the job title, role id, the department that role belongs to, and the salary for that role
-- DONE:
-- SELECT
-- role.title AS job_title, -- column
-- role.id AS role_id, -- column
-- department.dept_name, -- column
-- role.salary -- column
-- FROM role JOIN department ON department.id = role.department_id;


-- -- THEN I am presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to
-- SELECT
-- employee.id,
-- employee.first_name,
-- employee.last_name,
-- role.title,
-- department.dept_name AS dept_name,
-- role.salary
-- FROM employee
-- LEFT JOIN role ON employee.role_id = role.id
-- LEFT JOIN department ON role.department_id = department.id;

UPDATE employee
SET role = --INPUT--
WHERE id = --INPUT--







