const BookingHotel = require("../../models/Hotel/BookingHotel");

class BookingHotelController {
  async index(req, res) {
    // Fetch all booking hotel records from the database
    const booking_hotel = await BookingHotel.all();

    // Check if the result is empty
    if (!booking_hotel) {
      // Return a 404 response if no data is found
      return res.status(404).json({
        message: "Data is empty",
        data: booking_hotel,
      });
    }
    // Return a 200 response with the fetched data if data exists
    return res.status(200).json({
      message: "Get All Resource Booking Hotel",
      data: booking_hotel,
    });
  }

  async store(req, res) {
    // Destructure the required fields from the request body
    const { hotel_id, check_in_date, check_out_date, guess_count, room_count, total_price } = req.body;

    // Take userId from token JWT
    const userId = req.user.userId;

    // Check if any of the required fields are missing
    if (!hotel_id || !check_in_date || !check_out_date || !guess_count || !room_count || !total_price) {
      // If any field is missing, return a 422 Unprocessable Entity status
      return res.status(422).json({
        message: "All fields must be filled correctly",
      });
    }

    const bookingData = {
      user_id: userId,
      hotel_id,
      check_in_date,
      check_out_date,
      guess_count,
      room_count,
      total_price,
    };

    // Call the create method of the booking hotel model to insert the new data into the database
    const booking_hotel = await BookingHotel.create(bookingData);

    // Return a success response with a 201 Created status, along with the newly created resource
    return res.status(201).json({
      message: "Resource is added successfully",
      data: booking_hotel,
    });
  }

  async show(req, res) {
    // Extract the 'id' parameter from the request URL
    const { id } = req.params;

    // Call the 'find' method from the hotel class to retrieve the hotel by ID
    const booking_hotel = await BookingHotel.find(id);

    // Check if the requested resource does not exist
    if (!booking_hotel) {
      // Return a 404 response with a message indicating that the resource was not found
      return res.status(404).send({
        message: `Resource not found`,
      });
    }

    // If the resource is found, return a 200 response with the data
    return res.status(200).send({
      message: `Get detail Resource with id ${id}`,
      data: booking_hotel,
    });
  }

  async update(req, res) {
    // Extract the 'id' parameter from the request URL
    const { id } = req.params;

    // Check if the booking hotel with the given ID exists in the database
    const booking_hotel_id = await BookingHotel.find(id);

    // If no matching booking hotel is found, return a 404 Not Found response
    if (!booking_hotel_id) {
      // Return a 404 response with a message indicating that the resource was not found
      return res.status(404).json({
        message: `Resource not found`,
      });
    }

    // Check user_id to booking_hotel_id
    if (booking_hotel_id.user_id !== req.user.userId) {
      return res.status(403).json({
        message: "You are not authorized to update this booking",
      });
    }

    // Update the booking hotel record with the new data provided in the request body
    const booking_hotel = await BookingHotel.update(id, req.body);

    // Return a 200 OK response indicating the update was successful
    return res.status(200).json({
      message: `Resource is update successfully`,
      data: booking_hotel,
    });
  }
  async destroy(req, res) {
    // Extract the 'id' parameter from the request URL
    const { id } = req.params;

    // Check if the booking hotel with the given ID exists in the database
    const booking_hotel_id = await BookingHotel.find(id);

    // If no matching booking hotel is found, return a 404 Not Found response
    if (!booking_hotel_id) {
      // Return a 404 response with a message indicating that the resource was not found
      return res.status(404).json({
        message: `Resource not found`,
      });
    }

    // Check user_id to booking_hotel_id
    if (booking_hotel_id.user_id !== req.user.userId) {
      return res.status(403).json({
        message: "You are not authorized to delete this booking",
      });
    }

    // If the resource exists, proceed to delete it
    const booking_hotel = await BookingHotel.delete(id);

    // Return a success response after successful deletion
    return res.status(200).json({
      message: `Resource is delete successfully`,
    });
  }
}

const object = new BookingHotelController();

module.exports = object;
