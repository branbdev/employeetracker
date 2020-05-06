const router = require("express").Router();

router.use("/api", require("./employeeroutes.js"));
router.use("/api", require("./roleroutes.js"));
router.use("/api", require("./deptroutes.js"));

module.exports = router;
