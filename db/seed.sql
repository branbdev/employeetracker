-- Department Seed Data
USE company_db;

INSERT INTO dept
    (name)
VALUES
    ('Engineering'),
    ('Human Resources'),
    ('Finance'),
    ('Sales'),
    ('Marketing');


-- Role Seed Data
USE company_db;

INSERT INTO role
    (title, salary, dept_id)
VALUES
    ('Software Engineer Lead', 200000, 1),
    ('Software Engineer', 150000, 1),
    ('Human Resources Manager', 80000, 2),
    ('Human Resources Coordinator', 50000, 2),
    ('Accounting Manager', 100000, 3),
    ('Accountant', 70000, 3),
    ('Sales Lead', 80000, 4),
    ('Salesperson', 50000, 4),
    ('Marketing Manager', 90000, 5),
    ('Marketing Associate', 55000, 5);

-- Employee Seed Data
USE company_db;
INSERT INTO employees
    (first_name, last_name, role_id, manager_id)
VALUES
    ('Karl', 'Marx', 1, null),
    ('Jean-Paul', 'Sartre', 2, 1),
    ('Nicholas', 'Cage', 3, null),
    ('Frederich', 'Engels', 4, 3),
    ('John', 'Locke', 4, null),
    ('Simone', 'du Beauvoir', 5, null),
    ('Albert', 'Camus', 6, 5),
    ('Noam', 'Chomsky', 7, null),
    ('Slavoj', 'Zizek', 8, 7),
    ('Amber', 'Frost', 9, null),
    ('Ilhan', 'Omar', 10, 9),
    ('Michel', 'Foucault', 2, 1),
    ('The', 'Rock', 7, null),
    ('Rust', 'Cohle', 8, 13),
    ('Nora', 'Durst', 10, 9);