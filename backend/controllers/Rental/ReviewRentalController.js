const ReviewRental = require("../../models/Rental/ReviewRental");

class BookingRentalController {
  async index(req, res) {
    // Fetch all review rental records from the database
    const review_rental = await ReviewRental.all();

    // Check if the result is empty
    if (!review_rental) {
      // Return a 404 response if no data is found
      return res.status(404).json({
        message: "Data is empty",
        data: review_rental,
      });
    }
    // Return a 200 response with the fetched data if data exists
    return res.status(200).json({
      message: "Get All Resource Review Rental",
      data: review_rental,
    });
  }

  async store(req, res) {
    // Destructure the required fields from the request body
    const { vehicle_id, rating, comment, date } = req.body;

    // Take userId from token JWT
    const userId = req.user.userId;

    // Check if any of the required fields are missing
    if (!vehicle_id || !rating || !comment || !date) {
      // If any field is missing, return a 422 Unprocessable Entity status
      return res.status(422).json({
        message: "All fields must be filled correctly",
      });
    }

    const reviewData = {
      user_id: userId,
      vehicle_id,
      rating,
      comment,
      date,
    };

    // Call the create method of the review rental model to insert the new data into the database
    const review_rental = await ReviewRental.create(reviewData);

    // Return a success response with a 201 Created status, along with the newly created resource
    return res.status(201).json({
      message: "Resource is added successfully",
      data: review_rental,
    });
  }

  async show(req, res) {
    // Extract the 'id' parameter from the request URL
    const { id } = req.params;

    // Call the 'find' method from the review rental class to retrieve the review rental by ID
    const review_rental = await ReviewRental.find(id);

    // Check if the requested resource does not exist
    if (!review_rental) {
      // Return a 404 response with a message indicating that the resource was not found
      return res.status(404).send({
        message: `Resource not found`,
      });
    }

    // If the resource is found, return a 200 response with the data
    return res.status(200).send({
      message: `Get detail Resource with id ${id}`,
      data: review_rental,
    });
  }

  async update(req, res) {
    // Extract the 'id' parameter from the request URL
    const { id } = req.params;

    // Check if the review rental with the given ID exists in the database
    const review_rental_id = await ReviewRental.find(id);

    // If no matching review rental is found, return a 404 Not Found response
    if (!review_rental_id) {
      // Return a 404 response with a message indicating that the resource was not found
      return res.status(404).json({
        message: `Resource not found`,
      });
    }

    // Check user_id to review_rental_id
    if (review_rental_id.user_id !== req.user.userId) {
      return res.status(403).json({
        message: "You are not authorized to update this review",
      });
    }

    // Update the review rental record with the new data provided in the request body
    const review_rental = await ReviewRental.update(id, req.body);

    // Return a 200 OK response indicating the update was successful
    return res.status(200).json({
      message: `Resource is update successfully`,
      data: review_rental,
    });
  }
  async destroy(req, res) {
    // Extract the 'id' parameter from the request URL
    const { id } = req.params;

    // Check if the review rental with the given ID exists in the database
    const review_rental_id = await ReviewRental.find(id);

    // If no matching review rental is found, return a 404 Not Found response
    if (!review_rental_id) {
      // Return a 404 response with a message indicating that the resource was not found
      return res.status(404).json({
        message: `Resource not found`,
      });
    }

    // Check user_id to review_rental_id
    if (review_rental_id.user_id !== req.user.userId) {
      return res.status(403).json({
        message: "You are not authorized to delete this review",
      });
    }

    // If the resource exists, proceed to delete it
    const review_rental = await ReviewRental.delete(id);

    // Return a success response after successful deletion
    return res.status(200).json({
      message: `Resource is delete successfully`,
    });
  }
}

const object = new BookingRentalController();

module.exports = object;
