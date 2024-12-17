const Tour = require("../../models/Tour/Tour");

class TourControlller {
  async index(req, res) {
    // Fetch all tour records from the database
    const tour = await Tour.all();

    // Check if the result is empty
    if (!tour) {
      // Return a 404 response if no data is found
      return res.status(404).json({
        message: "Data is empty",
        data: tour,
      });
    }
    // Return a 200 response with the fetched data if data exists
    return res.status(200).json({
      message: "Get All Resource Tour",
      data: tour,
    });
  }

  async store(req, res) {
    // Destructure the required fields from the request body
    const { name_tour, duration, destination, price, facility, tour_image, image, history, day1_description, day2_description, day3_description, detail_price } = req.body;

    // Check if any of the required fields are missing
    if (!name_tour || !duration || !destination || !price || !facility || !tour_image || !image || !history || !day1_description || !day2_description || !day3_description || !detail_price) {
      // If any field is missing, return a 422 Unprocessable Entity status
      return res.status(422).json({
        message: "All fields must be filled correctly",
      });
    }

    // Call the create method of the tour model to insert the new data into the database
    const tour = await Tour.create(req.body);

    // Return a success response with a 201 Created status, along with the newly created resource
    return res.status(201).json({
      message: "Resource is added successfully",
      data: tour,
    });
  }

  async show(req, res) {
    // Extract the 'id' parameter from the request URL
    const { id } = req.params;

    // Call the 'find' method from the tour class to retrieve the tour by ID
    const tour = await Tour.find(id);

    // Check if the requested resource does not exist
    if (!tour) {
      // Return a 404 response with a message indicating that the resource was not found
      return res.status(404).send({
        message: `Resource not found`,
      });
    }

    // If the resource is found, return a 200 response with the data
    return res.status(200).send({
      message: `Get detail Resource with id ${id}`,
      data: tour,
    });
  }

  async update(req, res) {
    // Extract the 'id' parameter from the request URL
    const { id } = req.params;

    // Check if the tour with the given ID exists in the database
    const tour_id = await Tour.find(id);

    // If no matching tour is found, return a 404 Not Found response
    if (!tour_id) {
      // Return a 404 response with a message indicating that the resource was not found
      return res.status(404).json({
        message: `Resource not found`,
      });
    }

    // Update the tour record with the new data provided in the request body
    const tour = await Tour.update(id, req.body);

    // Return a 200 OK response indicating the update was successful
    return res.status(200).json({
      message: `Resource is update successfully`,
      data: tour,
    });
  }
  async destroy(req, res) {
    // Extract the 'id' parameter from the request URL
    const { id } = req.params;

    // Check if the tour with the given ID exists in the database
    const tour_id = await Tour.find(id);

    // If no matching tour is found, return a 404 Not Found response
    if (!tour_id) {
      return res.status(404).json({
        // Return a 404 response with a message indicating that the resource was not found
        message: `Resource not found`,
      });
    }

    // If the resource exists, proceed to delete it
    const tour = await Tour.delete(id);

    // Return a success response after successful deletion
    return res.status(200).json({
      message: `Resource is delete successfully`,
    });
  }
  async getFavorites(req, res) {
    try {
      const tours = await Tour.getTopFavorites(3);
      if (!tours || tours.length === 0) {
        return res.status(404).json({
          message: "No favorite tours found",
        });
      }
      return res.status(200).json({
        message: "Top 3 Favorite Tours",
        data: tours,
      });
    } catch (error) {
      return res.status(500).json({
        message: "Internal Server Error",
        error: error.message,
      });
    }
  }
}

const object = new TourControlller();

module.exports = object;
