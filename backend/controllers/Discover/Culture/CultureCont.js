const CultureModels = require("../../../models/Discover/Culture/CultureModels");

class CultureCont {
  async index(req, res) {
    // Fetch all Culture records from the database
    const culture = await CultureModels.all();

    // Check if the result is empty
    if (!culture) {
      // Return a 404 response if no data is found
      return res.status(404).json({
        message: "Data is empty",
        data: culture,
      });
    }
    // Return a 200 response with the fetched data if data exists
    return res.status(200).json({
      message: "Get All Resource Culture",
      data: culture,
    });
  }

  async store(req, res) {
    // Destructure the required fields from the request body
    const { name, description, image_budaya } = req.body;

    // Check if any of the required fields are missing
    if (!name || !description || !image_budaya) {
      // If any field is missing, return a 422 Unprocessable Entity status
      return res.status(422).json({
        message: "All fields must be filled correctly",
      });
    }

    // Call the create method of the culture model to insert the new data into the database
    const culture = await CultureModels.create(req.body);

    // Return a success response with a 201 Created status, along with the newly created resource
    return res.status(201).json({
      message: "Resource is added successfully",
      data: culture,
    });
  }

  async show(req, res) {
    // Extract the 'id' parameter from the request URL
    const { id } = req.params;

    // Call the 'find' method from the culture class to retrieve the tour by ID
    const culture = await CultureModels.find(id);

    // Check if the requested resource does not exist
    if (!culture) {
      // Return a 404 response with a message indicating that the resource was not found
      return res.status(404).send({
        message: `Resource not found`,
      });
    }

    // If the resource is found, return a 200 response with the data
    return res.status(200).send({
      message: `Get detail Resource with id ${id}`,
      data: culture,
    });
  }

  async update(req, res) {
    // Extract the 'id' parameter from the request URL
    const { id } = req.params;

    // Check if the tour with the given ID exists in the database
    const id_cul = await CultureModels.find(id);

    // If no matching vehicle is found, return a 404 Not Found response
    if (!id_cul) {
      // Return a 404 response with a message indicating that the resource was not found
      return res.status(404).json({
        message: `Resource not found`,
      });
    }

    // Update the vehicle record with the new data provided in the request body
    const culture = await CultureModels.update(id, req.body);

    // Return a 200 OK response indicating the update was successful
    return res.status(200).json({
      message: `Resource is update successfully`,
      data: culture,
    });
  }
  async destroy(req, res) {
    // Extract the 'id' parameter from the request URL
    const { id } = req.params;

    // Check if the culture with the given ID exists in the database
    const id_cul = await CultureModels.find(id);

    // If no matching culture is found, return a 404 Not Found response
    if (!id_cul) {
      return res.status(404).json({
        // Return a 404 response with a message indicating that the resource was not found
        message: `Resource not found`,
      });
    }

    // If the resource exists, proceed to delete it
    const culture = await CultureModels.delete(id);

    // Return a success response after successful deletion
    return res.status(200).json({
      message: `Resource is delete successfully`,
    });
  }
}

const object = new CultureCont();

module.exports = object;
