const db = require("../config/connection.js");

const employee = {
  // get all employees
  getEmployees(callback) {
    db.query(
      `
    SELECT employee.employee_id, employee.first_name, employee.last_name, role.role_title, dept.dept_name, role.salary, manager_id
    FROM employee
    INNER JOIN role
    ON employee.role_id = role.role_id
    INNER JOIN dept
    ON role.dept_id = dept.dept_id;`,
      (error, employee) => {
        if (error) throw error;
        callback(employee);
      }
    );
  },
  // Get all employees by deptartment
  getEmployeesByDepartment(deptName, callback) {
    db.query(
      `
    SELECT employee.employee_id, employee.first_name, employee.last_name, role.role_title, department.dept_name, role.salary
    FROM employee
    INNER JOIN role
    ON employee.role_id = role.role_id
    INNER JOIN dept
    ON role.dept_id = dept.dept_id
    WHERE ?
    `,
      { dept_name: deptName },
      (error, employees) => {
        if (error) throw error;
        callback(employees);
      }
    );
  },
  //get All Employees under a manager by ID
  getEmployeesByManager(id, callback) {
    db.query(
      `
    SELECT employee.first_name, employee.last_name FROM employee
    WHERE ?`,
      { manager_id: id },
      (error, employee) => {
        if (error) throw error;
        callback(employee);
      }
    );
  },
  //get all employees and their ID
  getEmployeesWithID(callback) {
    db.query(
      "SELECT employee.employee_id, employee.first_name, employee.last_name FROM employee",
      (error, employee) => {
        if (error) throw error;
        callback(employee);
      }
    );
  },
  //returns first name combined with last name and puts those values in a whole_name column
  getEmployeeNames(callback) {
    db.query(
      `SELECT CONCAT(employee.first_name, ' ', employee.last_name) AS whole_name FROM employee`,
      (error, employee) => {
        if (error) throw error;
        callback(employee);
      }
    );
  },
  //get employee by their full name
  getEmployeeByName(fullname, callback) {
    db.query(
      `
    SELECT * FROM employee
    WHERE CONCAT(employee.first_name, ' ', employee.last_name) = '${fullname}';`,
      (error, employee) => {
        if (error) throw error;
        callback(employee);
      }
    );
  },
  //return all managers
  getAllManagers(callback) {
    db.query(
      `
    SELECT employee.employee_id, CONCAT(employee.first_name, ' ', employee.last_name) AS whole_name FROM employee
    WHERE employee.employee_id IN (SELECT DISTINCT manager_id FROM employee
    WHERE manager_id IS NOT NULL);
    `,
      (error, managers) => {
        if (error) throw error;
        callback(managers);
      }
    );
  },
  // create an employee
  createEmployee(employeeInfo, callback) {
    //employee info must be passed in as an object with all the necessary info
    db.query("INSERT INTO employee SET ?", employeeInfo, (error) => {
      if (error) throw error;
      callback();
    });
  },
  // update employee given fullname
  updateEmployee(fullname, updates, callback) {
    db.query(
      `
      UPDATE employee
      SET ?
      WHERE CONCAT(employee.first_name, ' ', employee.last_name) = '${fullname}';`,
      updates,
      (error) => {
        if (error) throw error;
        callback();
      }
    );
  },
  // delete employee
  deleteEmployee(fullname, callback) {
    db.query(
      `DELETE FROM employee WHERE CONCAT(employee.first_name, ' ', employee.last_name) = '${fullname}';`,
      (error) => {
        if (error) throw error;
        callback();
      }
    );
  },
};

module.exports = employee;
