const DestinationModels = require("../../../models/Discover/Destination/DestinationModels");

class DestinationCont {
  // Menampilkan semua destinasi
  async index(req, res) {
    const dest = await DestinationModels.all();

    if (!dest) {
      return res.status(404).json({
        message: "Data is empty",
        data: dest,
      });
    }

    return res.status(200).json({
      message: "Get All Resource Destination",
      data: dest,
    });
  }

  // Menyimpan destinasi baru
  async store(req, res) {
    const {
      name_dest,
      nama_category,
      image_destination,
      image2_dest,
      image3_dest,
      description,
      opening_hours,
      facilities,
      additional_information,
      travel_tips,
      harga_adult_domestic,
      harga_adult_international,
      harga_child_domestic,
      harga_child_international,
    } = req.body;

    // Validasi jika ada field yang kosong
    if (
      !name_dest ||
      !nama_category ||
      !image_destination ||
      !image2_dest ||
      !image3_dest ||
      !description ||
      !opening_hours ||
      !facilities ||
      !additional_information ||
      !travel_tips ||
      !harga_adult_domestic ||
      !harga_adult_international ||
      !harga_child_domestic ||
      !harga_child_international
    ) {
      return res.status(422).json({
        message: "All fields must be filled correctly",
      });
    }

    try {
      // Panggil model untuk menyimpan destinasi
      const dest = await DestinationModels.create(req.body);

      return res.status(201).json({
        message: "Resource is added successfully",
        data: dest,
      });
    } catch (error) {
      return res.status(500).json({
        message: "Internal server error",
        error: error.message,
      });
    }
  }

  // Menampilkan detail destinasi berdasarkan ID
  async show(req, res) {
    const { id } = req.params;

    const dest = await DestinationModels.find(id);

    if (!dest) {
      return res.status(404).send({
        message: `Resource not found`,
      });
    }

    return res.status(200).send({
      message: `Get detail Resource with id ${id}`,
      data: dest,
    });
  }

  // Mengupdate destinasi
  async update(req, res) {
    const { id } = req.params;

    const id_dest = await DestinationModels.find(id);

    if (!id_dest) {
      return res.status(404).json({
        message: `Resource not found`,
      });
    }

    const dest = await DestinationModels.update(id, req.body);

    return res.status(200).json({
      message: `Resource is updated successfully`,
      data: dest,
    });
  }

  // Menghapus destinasi
  async destroy(req, res) {
    const { id } = req.params;

    const id_dest = await DestinationModels.find(id);

    if (!id_dest) {
      return res.status(404).json({
        message: `Resource not found`,
      });
    }

    await DestinationModels.delete(id);

    return res.status(200).json({
      message: `Resource is deleted successfully`,
    });
  }
}

const object = new DestinationCont();

module.exports = object;
