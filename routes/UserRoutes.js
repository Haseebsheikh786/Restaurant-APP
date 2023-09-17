const express = require("express");
const { fetchUserById, updateUser } = require("../controller/UserController");

const { isAuth } = require("../services/common");
const router = express.Router();

router.get("/own", isAuth(), fetchUserById);
router.patch("/:id", isAuth(), updateUser);

module.exports = router;
