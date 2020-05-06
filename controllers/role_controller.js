const db = require("../config/connection.js");

const role = {
  // get all roles
  getRoles(callback) {
    db.query(
      `
    SELECT role.role_title, role.salary, dept.dept_name
    FROM role
    INNER JOIN dept
	  ON role.dept_id = dept.dept_id;`,
      (error, roles) => {
        if (error) throw error;
        callback(roles);
      }
    );
  },
  // Get one role by role title
  getRole(roleTitle, callback) {
    db.query(
      `
    SELECT role.role_id, role.role_title, role.salary, dept.dept_name
    FROM role
    INNER JOIN dept
    ON role.dept_id = dept.dept_id
    WHERE ?`,
      { role_title: roleTitle },
      (error, job) => {
        if (error) throw error;
        callback(job);
      }
    );
  },
  // create a role
  createRole(roleInfo, callback) {
    //Role info must be passed in as an object with all the necessary info
    db.query("INSERT INTO role SET ?", roleInfo, (error) => {
      if (error) throw error;
      callback();
    });
  },
  // update role
  updateRole(id, updates, callback) {
    db.query(
      "UPDATE role SET ? WHERE ?",
      [updates, { role_id: id }],
      (error) => {
        if (error) throw error;
        callback();
      }
    );
  },
  // delete Role
  deleteRole(id, callback) {
    db.query("DELETE FROM role WHERE ?", { role_id: id }, (error) => {
      if (error) throw error;
      callback();
    });
  },
};

module.exports = role;
