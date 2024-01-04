const { Booking } = require("../models/index");
const { ValidationError, AppError } = require("../utils/errors/index");
const { InternalServerError } = require("http-errors");
class BookingRepository {
  async create(data) {
    try {
      const booking = await Booking.create(data);
      return booking;
    } catch (error) {
      if (error.name == "SequelizeValidationError") {
        throw new ValidationError(error);
      }
      throw new AppError(
        "RepositoryError",
        "cannot create booking",
        "There  was some issues creating , please try again",
        InternalServerError
      );
    }
  }
  async update() {
    try {
    } catch (error) {}
  }
}
module.exports = BookingRepository;
