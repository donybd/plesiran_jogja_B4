const DetailHotel = require("../../models/Hotel/DetailHotel");

class DetailHotelController {
  async index(req, res) {
    // Fetch all detail hotel records from the database
    const detail_hotel = await DetailHotel.all();

    // Check if the result is empty
    if (!detail_hotel) {
      // Return a 404 response if no data is found
      return res.status(404).json({
        message: "Data is empty",
        data: detail_hotel,
      });
    }
    // Return a 200 response with the fetched data if data exists
    return res.status(200).json({
      message: "Get All Resource Detail Hotel",
      data: detail_hotel,
    });
  }

  async store(req, res) {
    // Destructure the required fields from the request body
    const { hotel_id, rooms_id, location, review_hotel_id } = req.body;

    // Check if any of the required fields are missing
    if (!hotel_id || !rooms_id || !location || !review_hotel_id) {
      // If any field is missing, return a 422 Unprocessable Entity status
      return res.status(422).json({
        message: "All fields must be filled correctly",
      });
    }

    // Call the create method of the detail hotel model to insert the new data into the database
    const detail_hotel = await DetailHotel.create(req.body);

    // Return a success response with a 201 Created status, along with the newly created resource
    return res.status(201).json({
      message: "Resource is added successfully",
      data: detail_hotel,
    });
  }

  async show(req, res) {
    // Extract the 'id' parameter from the request URL
    const { id } = req.params;

    // Call the 'find' method from the detail hotel class to retrieve the detail hotel by ID
    const detail_hotel = await DetailHotel.find(id);

    // Check if the requested resource does not exist
    if (!detail_hotel) {
      // Return a 404 response with a message indicating that the resource was not found
      return res.status(404).send({
        message: `Resource not found`,
      });
    }

    // If the resource is found, return a 200 response with the data
    return res.status(200).send({
      message: `Get detail Resource with id ${id}`,
      data: detail_hotel,
    });
  }

  async update(req, res) {
    // Extract the 'id' parameter from the request URL
    const { id } = req.params;

    // Check if the detail hotel with the given ID exists in the database
    const detail_hotel_id = await DetailHotel.find(id);

    // If no matching detail hotel is found, return a 404 Not Found response
    if (!detail_hotel_id) {
      // Return a 404 response with a message indicating that the resource was not found
      return res.status(404).json({
        message: `Resource not found`,
      });
    }

    // Update the detail hotel record with the new data provided in the request body
    const detail_hotel = await DetailHotel.update(id, req.body);

    // Return a 200 OK response indicating the update was successful
    return res.status(200).json({
      message: `Resource is update successfully`,
      data: detail_hotel,
    });
  }
  async destroy(req, res) {
    // Extract the 'id' parameter from the request URL
    const { id } = req.params;

    // Check if the detail hotel with the given ID exists in the database
    const detail_hotel_id = await DetailHotel.find(id);

    // If no matching detail hotel is found, return a 404 Not Found response
    if (!detail_hotel_id) {
      return res.status(404).json({
        // Return a 404 response with a message indicating that the resource was not found
        message: `Resource not found`,
      });
    }

    // If the resource exists, proceed to delete it
    const detail_hotel = await DetailHotel.delete(id);

    // Return a success response after successful deletion
    return res.status(200).json({
      message: `Resource is delete successfully`,
    });
  }
}

const object = new DetailHotelController();

module.exports = object;
