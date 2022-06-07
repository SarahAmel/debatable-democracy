DROP DATABASE IF EXISTS employees;
CREATE DATABASE employees;

USE employees;

CREATE TABLE department (
  id `INT PRIMARY KEY`  AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(30) NOT NULL
);

CREATE TABLE role (
    id `INT PRIMARY KEY` AUTO_INCREMENT PRIMARY KEY,
    title `VARCHAR(30)` NOT NULL
    salary DECIMAL  NOT NULL,
    department_id INT,
);

CREATE TABLE employees (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
   first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  role_id INT,
   manager_id INT,
);



