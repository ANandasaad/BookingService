const { BookingService } = require("../services/index");

const bookingService = new BookingService();
const create = async (req, res, next) => {
  try {
    const response = await bookingService.createBooking(req.body);

    res.json({
      success: true,
      message: "Booking created successfully",
      data: response,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: error.message,
      data: {},
      err: error,
    });
  }
};

module.exports = {
  create,
};
