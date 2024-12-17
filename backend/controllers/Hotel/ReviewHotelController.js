const ReviewHotel = require("../../models/Hotel/ReviewHotel");

class ReviewHotelController {
  async index(req, res) {
    // Fetch all review hotel records from the database
    const review_hotel = await ReviewHotel.all();

    // Check if the result is empty
    if (!review_hotel) {
      // Return a 404 response if no data is found
      return res.status(404).json({
        message: "Data is empty",
        data: review_hotel,
      });
    }
    // Return a 200 response with the fetched data if data exists
    return res.status(200).json({
      message: "Get All Resource Review Hotel",
      data: review_hotel,
    });
  }

  async store(req, res) {
    // Destructure the required fields from the request body
    const { rating, comment, date, hotel_id } = req.body;

    // Take userId from token JWT
    const userId = req.user.userId;

    // Check if any of the required fields are missing
    if (!rating || !comment || !date || !hotel_id) {
      // If any field is missing, return a 422 Unprocessable Entity status
      return res.status(422).json({
        message: "All fields must be filled correctly",
      });
    }

    const reviewData = {
      rating,
      comment,
      date,
      user_id: userId,
      hotel_id,
    };

    // Call the create method of the review hotel model to insert the new data into the database
    const review_hotel = await ReviewHotel.create(reviewData);

    // Return a success response with a 201 Created status, along with the newly created resource
    return res.status(201).json({
      message: "Resource is added successfully",
      data: review_hotel,
    });
  }

  async show(req, res) {
    // Extract the 'id' parameter from the request URL
    const { id } = req.params;

    // Call the 'find' method from the review hotel class to retrieve the review hotel by ID
    const review_hotel = await ReviewHotel.find(id);

    // Check if the requested resource does not exist
    if (!review_hotel) {
      // Return a 404 response with a message indicating that the resource was not found
      return res.status(404).send({
        message: `Resource not found`,
      });
    }

    // If the resource is found, return a 200 response with the data
    return res.status(200).send({
      message: `Get detail Resource with id ${id}`,
      data: review_hotel,
    });
  }

  async update(req, res) {
    const { id } = req.params; // Mengambil ID dari URL

    // Check if the review hotel with the given ID exists in the database
    const review_hotel_id = await ReviewHotel.find(id);

    // If no matching review hotel is found, return a 404 Not Found response
    if (!review_hotel_id) {
      // Return a 404 response with a message indicating that the resource was not found
      return res.status(404).json({
        message: `Resource not found`,
      });
    }

    // Check user_id to review_hotel_id
    if (review_hotel_id.user_id !== req.user.userId) {
      return res.status(403).json({
        message: "You are not authorized to update this review",
      });
    }

    try {
      const review_hotel = await ReviewHotel.update(id, req.body);

      if (review_hotel === 0) {
        return res.status(404).json({ message: "Review not found" });
      }

      return res.status(200).json({
        message: "Review updated successfully",
        data: review_hotel,
      });
    } catch (err) {
      return res.status(500).json({ error: err.message });
    }
  }

  async destroy(req, res) {
    // Extract the 'id' parameter from the request URL
    const { id } = req.params;

    // Check if the review hotel with the given ID exists in the database
    const review_hotel_id = await ReviewHotel.find(id);

    // If no matching hotel is found, return a 404 Not Found response
    if (!review_hotel_id) {
      // Return a 404 response with a message indicating that the resource was not found
      return res.status(404).json({
        message: `Resource not found`,
      });
    }

    // Check user_id to review_hotel_id
    if (review_hotel_id.user_id !== req.user.userId) {
      return res.status(403).json({
        message: "You are not authorized to update this review",
      });
    }

    // If the resource exists, proceed to delete it
    const review_hotel = await ReviewHotel.delete(id);

    // Return a success response after successful deletion
    return res.status(200).json({
      message: `Resource is delete successfully`,
    });
  }
}

const object = new ReviewHotelController();

module.exports = object;
