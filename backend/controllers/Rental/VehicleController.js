const Vehicle = require("../../models/Rental/Vehicle");

class VehicleController {
  async index(req, res) {
    // Fetch all vehicle records from the database
    const vehicle = await Vehicle.all();

    // Check if the result is empty
    if (!vehicle) {
      // Return a 404 response if no data is found
      return res.status(404).json({
        message: "Data is empty",
        data: vehicle,
      });
    }
    // Return a 200 response with the fetched data if data exists
    return res.status(200).json({
      message: "Get All Resource Vehicle",
      data: vehicle,
    });
  }

  async store(req, res) {
    // Destructure the required fields from the request body
    const { vehicle_name, category, type_vehicle, transmission_type, manufacture_year, seating_capacity, fuel_type, rating, price, vehicle_image } = req.body;

    // Check if any of the required fields are missing
    if (!vehicle_name || !category || !type_vehicle || !transmission_type || !manufacture_year || !seating_capacity || !fuel_type || !rating || !price || !vehicle_image) {
      // If any field is missing, return a 422 Unprocessable Entity status
      return res.status(422).json({
        message: "All fields must be filled correctly",
      });
    }

    // Call the create method of the vehicle model to insert the new data into the database
    const vehicle = await Vehicle.create(req.body);

    // Return a success response with a 201 Created status, along with the newly created resource
    return res.status(201).json({
      message: "Resource is added successfully",
      data: vehicle,
    });
  }

  async show(req, res) {
    // Extract the 'id' parameter from the request URL
    const { id } = req.params;

    // Call the 'find' method from the vehicle class to retrieve the tour by ID
    const vehicle = await Vehicle.find(id);

    // Check if the requested resource does not exist
    if (!vehicle) {
      // Return a 404 response with a message indicating that the resource was not found
      return res.status(404).send({
        message: `Resource not found`,
      });
    }

    // If the resource is found, return a 200 response with the data
    return res.status(200).send({
      message: `Get detail Resource with id ${id}`,
      data: vehicle,
    });
  }

  async update(req, res) {
    // Extract the 'id' parameter from the request URL
    const { id } = req.params;

    // Check if the tour with the given ID exists in the database
    const vehicle_id = await Vehicle.find(id);

    // If no matching vehicle is found, return a 404 Not Found response
    if (!vehicle_id) {
      // Return a 404 response with a message indicating that the resource was not found
      return res.status(404).json({
        message: `Resource not found`,
      });
    }

    // Update the vehicle record with the new data provided in the request body
    const vehicle = await Vehicle.update(id, req.body);

    // Return a 200 OK response indicating the update was successful
    return res.status(200).json({
      message: `Resource is update successfully`,
      data: vehicle,
    });
  }
  async destroy(req, res) {
    // Extract the 'id' parameter from the request URL
    const { id } = req.params;

    // Check if the vehicle with the given ID exists in the database
    const vehicle_id = await Vehicle.find(id);

    // If no matching vehicle is found, return a 404 Not Found response
    if (!vehicle_id) {
      return res.status(404).json({
        // Return a 404 response with a message indicating that the resource was not found
        message: `Resource not found`,
      });
    }

    // If the resource exists, proceed to delete it
    const vehicle = await Vehicle.delete(id);

    // Return a success response after successful deletion
    return res.status(200).json({
      message: `Resource is delete successfully`,
    });
  }
}

const object = new VehicleController();

module.exports = object;
