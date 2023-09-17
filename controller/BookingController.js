const { Booking } = require("../models/Booking");
const { User } = require("../models/User");
const { sendMail, invoiceTemplate } = require("../services/common");

exports.fetchBookingsByUser = async (req, res) => {
  const { id } = req.user;
  try {
    const orders = await Booking.find({ user: id });
    res.status(200).json(orders);
  } catch (err) {
    res.status(400).json(err);
  }
};

exports.createBooking = async (req, res) => {
  const product = new Booking(req.body);

  try {
    const doc = await product.save();
    console.log("success");
    res.status(201).json(doc);
  } catch (err) {
    res.status(400).json(err);
    console.log("error");
  }
};

exports.fetchALLTheBookings = async (req, res) => {
  try {
    const orders = await Booking.find();
    res.status(200).json(orders);
  } catch (err) {
    res.status(400).json(err);
  }
};
