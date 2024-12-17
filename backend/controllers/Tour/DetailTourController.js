const DetailTour = require("../../models/Tour/DetailTour");

class DetailTourController {
  async index(req, res) {
    // Fetch all detail tour records from the database
    const detail_tour = await DetailTour.all();

    // Check if the result is empty
    if (!detail_tour) {
      // Return a 404 response if no data is found
      return res.status(404).json({
        message: "Data is empty",
        data: detail_tour,
      });
    }
    // Return a 200 response with the fetched data if data exists
    return res.status(200).json({
      message: "Get All Resource Detail Tour",
      data: detail_tour,
    });
  }

  async store(req, res) {
    // Destructure the required fields from the request body
    const { image, tour_id, history, day1_description, day2_description, day3_description, detail_price } = req.body;

    // Check if any of the required fields are missing
    if (!image || !tour_id || !history || !day1_description || !day2_description || !day3_description || !detail_price) {
      // If any field is missing, return a 422 Unprocessable Entity status
      return res.status(422).json({
        message: "All fields must be filled correctly",
      });
    }

    // Call the create method of the DetailTour model to insert the new data into the database
    const detail_tour = await DetailTour.create(req.body);

    // Return a success response with a 201 Created status, along with the newly created resource
    return res.status(201).json({
      message: "Resource is added successfully",
      data: detail_tour,
    });
  }

  async show(req, res) {
    // Extract the 'id' parameter from the request URL
    const { id } = req.params;

    // Call the 'find' method from the DetailTour class to retrieve the detail_tour by ID
    const detail_tour = await DetailTour.find(id);

    // Check if the requested resource does not exist
    if (!detail_tour) {
      // Return a 404 response with a message indicating that the resource was not found
      return res.status(404).send({
        message: `Resource not found`,
      });
    }

    // If the resource is found, return a 200 response with the data
    return res.status(200).send({
      message: `Get detail Resource with id ${id}`,
      data: detail_tour,
    });
  }

  async update(req, res) {
    // Extract the 'id' parameter from the request URL
    const { id } = req.params;

    // Check if the detail tour with the given ID exists in the database
    const detailTour_id = await DetailTour.find(id);

    // If no matching detail tour is found, return a 404 Not Found response
    if (!detailTour_id) {
      // Return a 404 response with a message indicating that the resource was not found
      return res.status(404).json({
        message: `Resource not found`,
      });
    }

    // Update the detail tour record with the new data provided in the request body
    const detail_tour = await DetailTour.update(id, req.body);

    // Return a 200 OK response indicating the update was successful
    return res.status(200).json({
      message: `Resource is update successfully`,
      data: detail_tour,
    });
  }
  async destroy(req, res) {
    // Extract the 'id' parameter from the request URL
    const { id } = req.params;

    // Check if the detail tour with the given ID exists in the database
    const detailTour_id = await DetailTour.find(id);

    // If no matching detail tour is found, return a 404 Not Found response
    if (!detailTour_id) {
      // Return a 404 response with a message indicating that the resource was not found
      return res.status(404).json({
        message: `Resource not found`,
      });
    }

    // If the resource exists, proceed to delete it
    const detail_tour = await DetailTour.delete(id);

    // Return a success response after successful deletion
    return res.status(200).json({
      message: `Resource is delete successfully`,
    });
  }
}

const object = new DetailTourController();

module.exports = object;
