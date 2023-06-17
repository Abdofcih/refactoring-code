const { Router } = require("express");
const { createUser,updateUser } = require("./users.controller");

const router = Router();

router.post("/", createUser);
router.patch("/:id", updateUser);

module.exports = router;
