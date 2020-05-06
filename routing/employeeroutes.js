const router = require("express").Router();
const {
  getEmployees,
  getEmployeesByDepartment,
  createEmployee,
  updateEmployee,
  deleteEmployee,
} = require("../controllers/employee_controller.js");

//GET ROUTES

//Employee Get Routes
//Get all employees
router.get("/employees", (request, response) => {
  getEmployees((employees) => {
    response.json(employees);
  });
});

//Get all employees by department
router.get("/employees/:deptName", (request, response) => {
  getEmployee(request.params.deptName.replace(/\+/g, " "), (employees) => {
    response.json(employees);
  });
});

//create an employee
router.post("/employees", (request, response) => {
  createEmployee(request.body, () => {
    response.sendStatus(200);
  });
});

// update an employee
router.put("/employees/:id", (request, response) => {
  updateEmployee(request.params.id, request.body, () => {
    response.sendStatus(200);
  });
});

// delete an employee
router.delete("/employees/:id", (request, response) => {
  deleteEmployee(request.params.id, () => {
    response.sendStatus(200);
  });
});
module.exports = router;
