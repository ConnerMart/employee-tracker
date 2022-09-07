DROP DATABASE IF EXISTS database_db;
CREATE DATABASE database_db;

USE database_db;

CREATE TABLE department (
    id INT PRIMARY KEY,
    name VARCHAR(30)
);

CREATE TABLE role (
    id INT PRIMARY KEY,
    title VARCHAR(30),
    salary DECIMAL,
    department_id INT
);

CREATE TABLE employee (
    id INT PRIMARY KEY,
    first_name VARCHAR(30),
    last_name VARCHAR (30),
    role_id INT,
    manager_id INT, -- reference to another employee, null if none
)