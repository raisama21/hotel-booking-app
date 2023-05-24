const Booking = require("../model/Booking");
const Room = require("../model/Room");

async function createBooking(req, res) {
  try {
    const booking = await Booking.create(req.body);

    try {
      let room = await Room.findOne({ _id: booking.roomId });

      room.currentbookings.push({
        bookingId: booking._id,
        fromDate: req?.body?.toDate,
        toDate: req?.body.fromDate,
        userId: req?.body?.userId,
        status: "booked",
      });

      await room.save();
    } catch (error) {
      console.log(error);
    }

    res.status(201).json(booking);
  } catch (error) {
    console.log(error);
  }
}

async function getBookingById(req, res) {
  try {
    const booking = await Booking.findOne({ _id: req?.params?.id });

    res.status(200).json(booking);
  } catch (error) {
    console.log(error);
  }
}

async function getUserBookingDetails(req, res) {
  try {
    const result = await Booking.findOne({ _userId: req?.params?.userId });

    res.status(200).json(result);
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  createBooking,
  getBookingById,
  getUserBookingDetails,
};
