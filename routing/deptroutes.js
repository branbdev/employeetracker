const router = require("express").Router();
const {
  getDepartments,
  getDepartment,
  createDepartment,
  updateDepartment,
  deleteDepartment,
} = require("../controllers/department_controller.js");
// Get all departments
router.get("/departments", (request, response) => {
  getDepartments((departments) => {
    response.json(departments);
  });
});
//get deptartment by name
router.get("/departments/:deptName", (request, response) => {
  // replacing + with spaces
  getDepartment(request.params.deptName.replace(/\+/g, " "), (department) => {
    response.json(department);
  });
});
//Create new department
router.post("/departments", (request, response) => {
  createDepartment(request.body, () => {
    response.sendStatus(200);
  });
});
// Update a department by id
router.put("/departments/:id", (request, response) => {
  updateDepartment(request.params.id, request.body, () => {
    response.sendStatus(200);
  });
});
// Delete a department by id
router.delete("/departments/:id", (request, response) => {
  deleteDepartment(request.params.id, () => {
    response.sendStatus(200);
  });
});

module.exports = router;
