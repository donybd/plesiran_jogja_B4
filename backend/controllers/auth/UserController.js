// const User = require("../../models/Auth/User");

// class UserController {
//   async index(req, res) {
//     // Fetch all user records from the database
//     const user = await User.all();

//     // Check if the result is empty
//     if (!user) {
//       // Return a 404 response if no data is found
//       return res.status(404).json({
//         message: "Data is empty",
//         data: user,
//       });
//     }
//     // Return a 200 response with the fetched data if data exists
//     return res.status(200).json({
//       message: "Get All Resource User",
//       data: user,
//     });
//   }

//   async show(req, res) {
//     // Extract the 'id' parameter from the request URL
//     const { id } = req.params;

//     // Call the 'find' method from the user class to retrieve the user by ID
//     const user = await User.find(id);

//     // Check if the requested resource does not exist
//     if (!user) {
//       // Return a 404 response with a message indicating that the resource was not found
//       return res.status(404).send({
//         message: `Resource not found`,
//       });
//     }

//     // If the resource is found, return a 200 response with the data
//     return res.status(200).send({
//       message: `Get detail Resource with id ${id}`,
//       data: user,
//     });
//   }

//   async destroy(req, res) {
//     // Extract the 'id' parameter from the request URL
//     const { id } = req.params;

//     // Check if the tour with the given ID exists in the database
//     const user_id = await Tour.find(id);

//     // If no matching tour is found, return a 404 Not Found response
//     if (!user_id) {
//       return res.status(404).json({
//         // Return a 404 response with a message indicating that the resource was not found
//         message: `Resource not found`,
//       });
//     }

//     // If the resource exists, proceed to delete it
//     const user = await User.delete(id);

//     // Return a success response after successful deletion
//     return res.status(200).json({
//       message: `Resource is delete successfully`,
//     });
//   }
// }

// const object = new UserController();

// module.exports = object;
