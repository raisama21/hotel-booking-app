const express = require("express");
const router = express.Router();
const bookingController = require("../../controllers/bookingController");

router.post("/book-room", bookingController.createBooking);

router.get("/:id", bookingController.getBookingById);

router.get(
  "/user-booking-details/:userId",
  bookingController.getUserBookingDetails
);

module.exports = router;
