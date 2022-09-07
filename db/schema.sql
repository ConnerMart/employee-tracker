DROP DATABASE IF EXISTS employees_db;
CREATE DATABASE employees_db;

USE employees_db;

CREATE TABLE department (
    id INT NOT NULL PRIMARY KEY,
    dept_name VARCHAR(30) NOT NULL
);

CREATE TABLE role (
    id INT NOT NULL PRIMARY KEY,
    title VARCHAR(30) NOT NULL,
    salary DECIMAL(5, 3) NOT NULL,
    department_id INT NOT NULL -- reference to department
);

CREATE TABLE employee (
    id INT NOT NULL PRIMARY KEY,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR (30) NOT NULL,
    role_id INT NOT NULL, -- reference to role
    manager_id INT -- reference to another employee, null if none
);

-- FOREIGN KEY (which item in *this* table is the foreign key)
-- REFERENCES (where is it coming from in another table)
-- ON DELETE (set null or cascade)