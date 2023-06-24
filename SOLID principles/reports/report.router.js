const { Router } = require("express");
const { generateReport } = require("./report.controller");

const router = Router();

router.get("/users/:reportType", generateReport);

module.exports = router;