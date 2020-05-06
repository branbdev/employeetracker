DROP DATABASE IF EXISTS company_db;

CREATE DATABASE company_db;

USE company_db;

CREATE TABLE employee
(
    id INT NOT NULL
    AUTO_INCREMENT,
        first_name varchar
    (30) NOT NULL,
        last_name varchar
    (30) NOT NULL,
        role_id INT NOT NULL,
        manager_id INT,
        PRIMARY KEY
    (id),
        FOREIGN KEY
    (role_id, manager_id)
    );

    CREATE TABLE role
    (
        id INT NOT NULL
        AUTO_INCREMENT,
        title varchar
        (30),
        salary DECIMAL,
        dept_id INT NOT NULL,
        PRIMARY KEY
        (id),
        FOREIGN KEY
        (dept_id)
    );

        CREATE TABLE dept
        (
            id INT NOT NULL
            AUTO_INCREMENT,
        name varchar
            (30),
        PRIMARY KEY
            (id)
    );

            SELECT *
            FROM dept;
            SELECT *
            FROM role;
            SELECT *
            FROM employee;