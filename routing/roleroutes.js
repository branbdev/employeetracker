const router = require("express").Router();
const {
  getRoles,
  getRole,
  createRole,
  updateRole,
  deleteRole,
} = require("../controllers/role_controller.js");
// Get all roles
router.get("/roles", (request, response) => {
  getRoles((roles) => {
    response.json(roles);
  });
});
//get deptartment by name
router.get("/roles/:roleName", (request, response) => {
  // replacing + with spaces
  getRole(request.params.roleName.replace(/\+/g, " "), (role) => {
    response.json(role);
  });
});
//Create new role
router.post("/roles", (request, response) => {
  createRole(request.body, () => {
    response.sendStatus(200);
  });
});
// Update a role by id
router.put("/roles/:id", (request, response) => {
  updateRole(request.params.id, request.body, () => {
    response.sendStatus(200);
  });
});
// Delete a role by id
router.delete("/roles/:id", (request, response) => {
  deleteRole(request.params.id, () => {
    response.sendStatus(200);
  });
});

module.exports = router;
