const express = require("express");
const passport = require("passport");

const { isAuth } = require("../services/common");
const {
  addToCart,
  fetchCartByUser,
  deleteFromCart,
  updateCart,
} = require("../controller/CartController");
const router = express.Router();

router.route("/").post(addToCart);
router.get("/", isAuth(), fetchCartByUser);
router.delete("/:id", isAuth(), deleteFromCart);
router.patch("/:id", isAuth(), updateCart);
 

module.exports = router;
