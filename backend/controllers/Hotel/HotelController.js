const Hotel = require("../../models/Hotel/Hotel");

class HotelController {
  async index(req, res) {
    // Fetch all hotel records from the database
    const hotel = await Hotel.all();

    // Check if the result is empty
    if (!hotel) {
      // Return a 404 response if no data is found
      return res.status(404).json({
        message: "Data is empty",
        data: hotel,
      });
    }
    // Return a 200 response with the fetched data if data exists
    return res.status(200).json({
      message: "Get All Resource Hotel",
      data: hotel,
    });
  }

  async store(req, res) {
    // Destructure the required fields from the request body
    const { name_hotel, address, rating, description, hotel_image, rooms_id } = req.body;

    // Check if any of the required fields are missing
    if (!name_hotel || !address || !rating || !rating || !description || !hotel_image || !rooms_id) {
      // If any field is missing, return a 422 Unprocessable Entity status
      return res.status(422).json({
        message: "All fields must be filled correctly",
      });
    }

    // Call the create method of the hotel model to insert the new data into the database
    const hotel = await Hotel.create(req.body);

    // Return a success response with a 201 Created status, along with the newly created resource
    return res.status(201).json({
      message: "Resource is added successfully",
      data: hotel,
    });
  }

  async show(req, res) {
    // Extract the 'id' parameter from the request URL
    const { id } = req.params;

    // Call the 'find' method from the hotel class to retrieve the hotel by ID
    const hotel = await Hotel.find(id);

    // Check if the requested resource does not exist
    if (!hotel) {
      // Return a 404 response with a message indicating that the resource was not found
      return res.status(404).send({
        message: `Resource not found`,
      });
    }

    // If the resource is found, return a 200 response with the data
    return res.status(200).send({
      message: `Get detail Resource with id ${id}`,
      data: hotel,
    });
  }

  async update(req, res) {
    // Extract the 'id' parameter from the request URL
    const { id } = req.params;

    // Check if the hotel with the given ID exists in the database
    const hotel_id = await Hotel.find(id);

    // If no matching hotel is found, return a 404 Not Found response
    if (!hotel_id) {
      // Return a 404 response with a message indicating that the resource was not found
      return res.status(404).json({
        message: `Resource not found`,
      });
    }

    // Update the hotel record with the new data provided in the request body
    const hotel = await Hotel.update(id, req.body);

    // Return a 200 OK response indicating the update was successful
    return res.status(200).json({
      message: `Resource is update successfully`,
      data: hotel,
    });
  }
  async destroy(req, res) {
    // Extract the 'id' parameter from the request URL
    const { id } = req.params;

    // Check if the hotel with the given ID exists in the database
    const hotel_id = await Hotel.find(id);

    // If no matching hotel is found, return a 404 Not Found response
    if (!hotel_id) {
      // Return a 404 response with a message indicating that the resource was not found
      return res.status(404).json({
        message: `Resource not found`,
      });
    }

    // If the resource exists, proceed to delete it
    const hotel = await Hotel.delete(id);

    // Return a success response after successful deletion
    return res.status(200).json({
      message: `Resource is delete successfully`,
    });
  }
}

const object = new HotelController();

module.exports = object;
