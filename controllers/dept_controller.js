const db = require("../config/connection.js");

const department = {
  // get all departments
  getDepartments(callback) {
    db.query("SELECT * FROM dept", (error, departments) => {
      if (error) throw error;
      callback(departments);
    });
  },
  // Get one department by deptartment name
  getDepartment(departmentName, callback) {
    db.query(
      "SELECT * FROM dept WHERE ?",
      { dept_name: departmentName },
      (error, dept) => {
        if (error) throw error;
        callback(dept);
      }
    );
  },
  // create an Department
  createDepartment(departmentInfo, callback) {
    //Department info must be passed in as an object with all the necessary info
    db.query("INSERT INTO dept SET ?", departmentInfo, (error) => {
      if (error) throw error;
      callback();
    });
  },
  // update Department
  updateDepartment(id, updates, callback) {
    db.query(
      "UPDATE dept SET ? WHERE ?",
      [updates, { dept_id: id }],
      (error) => {
        if (error) throw error;
        callback();
      }
    );
  },
  // delete Department
  deleteDepartment(id, callback) {
    db.query("DELETE FROM dept WHERE ?", { dept_id: id }, (error) => {
      if (error) throw error;
      callback();
    });
  },
};

module.exports = department;
