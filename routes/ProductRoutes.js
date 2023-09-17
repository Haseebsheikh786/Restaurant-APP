const express = require("express");

const {
  createProduct,
  fetchAllProducts,
  SearchProductByTitle,
} = require("../controller/ProductController");

const { isAuth } = require("../services/common");
const router = express.Router();

router.post("/", isAuth(), createProduct);
router.get("/", fetchAllProducts);
router.get("/search/:title", SearchProductByTitle);

module.exports = router;
