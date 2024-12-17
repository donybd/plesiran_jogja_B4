const Facilities = require("../../models/Hotel/Facilities");

class FacilitiesController {
  async index(req, res) {
    // Fetch all facilities records from the database
    const facilities = await Facilities.all();

    // Check if the result is empty
    if (!facilities) {
      // Return a 404 response if no data is found
      return res.status(404).json({
        message: "Data is empty",
        data: facilities,
      });
    }
    // Return a 200 response with the fetched data if data exists
    return res.status(200).json({
      message: "Get All Resource facilities",
      data: facilities,
    });
  }

  async store(req, res) {
    // Destructure the required fields from the request body
    const { name, description } = req.body;

    // Check if any of the required fields are missing
    if (!name || !description) {
      // If any field is missing, return a 422 Unprocessable Entity status
      return res.status(422).json({
        message: "All fields must be filled correctly",
      });
    }

    // Call the create method of the facilities model to insert the new data into the database
    const facilities = await Facilities.create(req.body);

    // Return a success response with a 201 Created status, along with the newly created resource
    return res.status(201).json({
      message: "Resource is added successfully",
      data: facilities,
    });
  }

  async show(req, res) {
    // Extract the 'id' parameter from the request URL
    const { id } = req.params;

    // Call the 'find' method from the facilities class to retrieve the hotel by ID
    const facilities = await Facilities.find(id);

    // Check if the requested resource does not exist
    if (!facilities) {
      // Return a 404 response with a message indicating that the resource was not found
      return res.status(404).send({
        message: `Resource not found`,
      });
    }

    // If the resource is found, return a 200 response with the data
    return res.status(200).send({
      message: `Get detail Resource with id ${id}`,
      data: facilities,
    });
  }

  async update(req, res) {
    // Extract the 'id' parameter from the request URL
    const { id } = req.params;

    // Check if the facilities with the given ID exists in the database
    const facilities_id = await Facilities.find(id);

    // If no matching facilities is found, return a 404 Not Found response
    if (!facilities_id) {
      // Return a 404 response with a message indicating that the resource was not found
      return res.status(404).json({
        message: `Resource not found`,
      });
    }

    // Update the facilities record with the new data provided in the request body
    const facilities = await Facilities.update(id, req.body);

    // Return a 200 OK response indicating the update was successful
    return res.status(200).json({
      message: `Resource is update successfully`,
      data: facilities,
    });
  }
  async destroy(req, res) {
    // Extract the 'id' parameter from the request URL
    const { id } = req.params;

    // Check if the facilities with the given ID exists in the database
    const facilities_id = await Facilities.find(id);

    // If no matching facilities is found, return a 404 Not Found response
    if (!facilities_id) {
      // Return a 404 response with a message indicating that the resource was not found
      return res.status(404).json({
        message: `Resource not found`,
      });
    }

    // If the resource exists, proceed to delete it
    const facilities = await Facilities.delete(id);

    // Return a success response after successful deletion
    return res.status(200).json({
      message: `Resource is delete successfully`,
    });
  }
}

const object = new FacilitiesController();

module.exports = object;
