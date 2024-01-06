const { FLIGHT_SERVICE_PATH } = require("../config/serverConfig");
const BookingRepository = require("../repository/booking-repository");
const axios = require("axios");
const { ServiceError } = require("../utils/errors");
class BookingService {
  constructor() {
    this.bookingRepository = new BookingRepository();
  }
  async createBooking(data) {
    try {
      const flightId = data.flightId;
      let getFlightRequestURL = `${FLIGHT_SERVICE_PATH}/api/v1/flights/${flightId}`;
      const flight = await axios.get(getFlightRequestURL);
      return flight.data;
    } catch (error) {
      throw new ServiceError();
    }
  }

  async updateBooking() {
    try {
    } catch (error) {}
  }
}
module.exports = BookingService;
