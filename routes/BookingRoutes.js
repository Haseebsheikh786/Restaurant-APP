const express = require("express");

const {
  fetchALLTheBookings,
  fetchBookingsByUser,
  createBooking,
} = require("../controller/BookingController");

const { isAuth } = require("../services/common");
const router = express.Router();

router.get("/", fetchALLTheBookings);
router.get("/own", isAuth(), fetchBookingsByUser);
router.post("/", isAuth(), createBooking);

module.exports = router;
