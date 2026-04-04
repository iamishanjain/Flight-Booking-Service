const axios = require("axios");
const { StatusCodes } = require("http-status-codes");
const { BookingRepository } = require("../repositories");
const { ServerConfig } = require("../config");
const db = require("../models");
const { AppError } = require("../utils/errors/app-error");

async function createBooking(data) {
  try {
    const result = await db.sequelize.transaction(
      async function bookingImpl(t) {
        const flight = await axios.get(
          `${ServerConfig.FLIGHT_SERVICE}/api/v1/flights/${data.flightId}`,
        );
        const flightData = flight.data.data;
        if (data.noOfSeats > flightData.totalSeats) {
          throw new AppError(
            "Not Enough seats are available",
            StatusCodes.INTERNAL_SERVER_ERROR,
          ); 
        }
        // console.log(flight.data);
        return true;
      },
    );
  } catch (error) {
    console.error(error);
    throw error;
  }
}

module.exports = { createBooking };
