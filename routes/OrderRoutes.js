const express = require("express");

const {
  createOrder,
  fetchOrdersByUser,
  fetchAllOrders,
} = require("../controller/OrderController");
const { isAuth } = require("../services/common");
const router = express.Router();

router.post("/", isAuth(), createOrder);
router.get("/own", isAuth(), fetchOrdersByUser);
router.get("/", isAuth(), fetchAllOrders);

module.exports = router;
