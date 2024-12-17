const BookingRental = require("../../models/Rental/BookingRental");

class BookingRentalController {
  async index(req, res) {
    // Fetch all booking rental records from the database
    const booking_rental = await BookingRental.all();

    // Check if the result is empty
    if (!booking_rental) {
      // Return a 404 response if no data is found
      return res.status(404).json({
        message: "Data is empty",
        data: booking_rental,
      });
    }
    // Return a 200 response with the fetched data if data exists
    return res.status(200).json({
      message: "Get All Resource Booking Rental",
      data: booking_rental,
    });
  }

  async store(req, res) {
    // Destructure the required fields from the request body
    const { vehicle_id, rental_date, return_date, total, location } = req.body;

    // Take userId from token JWT
    const userId = req.user.userId;

    // Check if any of the required fields are missing
    if (!vehicle_id || !rental_date || !return_date || !total || !location) {
      // If any field is missing, return a 422 Unprocessable Entity status
      return res.status(422).json({
        message: "All fields must be filled correctly",
      });
    }

    const bookingData = {
      user_id: userId,
      vehicle_id,
      rental_date,
      return_date,
      total,
      location,
    };

    // Call the create method of the booking hotel model to insert the new data into the database
    const booking_rental = await BookingRental.create(bookingData);

    // Return a success response with a 201 Created status, along with the newly created resource
    return res.status(201).json({
      message: "Resource is added successfully",
      data: booking_rental,
    });
  }

  async show(req, res) {
    // Extract the 'id' parameter from the request URL
    const { id } = req.params;

    // Call the 'find' method from the booking rental class to retrieve the booking rental by ID
    const booking_rental = await BookingRental.find(id);

    // Check if the requested resource does not exist
    if (!booking_rental) {
      // Return a 404 response with a message indicating that the resource was not found
      return res.status(404).send({
        message: `Resource not found`,
      });
    }

    // If the resource is found, return a 200 response with the data
    return res.status(200).send({
      message: `Get detail Resource with id ${id}`,
      data: booking_rental,
    });
  }

  async update(req, res) {
    // Extract the 'id' parameter from the request URL
    const { id } = req.params;
    const booking_rental_id = await BookingRental.find(id);

    // If data doenst exist, return error
    if (!booking_rental_id) {
      return res.status(404).json({
        message: "Booking rental not found",
      });
    }

    // Check user_id to booking_rental_id
    if (booking_rental_id.user_id !== req.user.userId) {
      return res.status(403).json({
        message: "You are not authorized to update this booking",
      });
    }

    // Update the booking rental record with the new data provided in the request body
    const booking_rental = await BookingRental.update(id, req.body);

    // Return a 200 OK response indicating the update was successful
    return res.status(200).json({
      message: `Resource is update successfully`,
      data: booking_rental,
    });
  }
  async destroy(req, res) {
    // Extract the 'id' parameter from the request URL
    const { id } = req.params;

    // Check if the booking rental with the given ID exists in the database
    const booking_rental_id = await BookingRental.find(id);

    // If no matching booking rental is found, return a 404 Not Found response
    if (!booking_rental_id) {
      // Return a 404 response with a message indicating that the resource was not found
      return res.status(404).json({
        message: `Resource not found`,
      });
    }

    // Check user_id to booking_rental_id
    if (booking_rental_id.user_id !== req.user.userId) {
      return res.status(403).json({
        message: "You are not authorized to delete this booking",
      });
    }

    // If the resource exists, proceed to delete it
    const booking_rental = await BookingRental.delete(id);

    // Return a success response after successful deletion
    return res.status(200).json({
      message: `Resource is delete successfully`,
    });
  }
}

const object = new BookingRentalController();

module.exports = object;
