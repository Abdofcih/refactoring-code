const { Router } = require("express");
const { createUser, updateUser, findOneUser } = require("./users.controller");

const router = Router();

router.post("/", createUser);
router.patch("/:id", updateUser);
router.get("/:id", findOneUser);

module.exports = router;
