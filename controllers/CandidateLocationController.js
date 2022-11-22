const models = require("../models/Index");

const getAllCandidateLocation = async (req, res, err) => {
  try {
    const candidate_location = await models.candidate_location.findAll({});
    if (candidate_location.length !== 0) {
      return res.status(200).json({
        message: "Success get all data candidate_location",
        data: candidate_location
      });
    } else {
      return res.status(404).json({
        message: "Data candidate_location is empty",
        data: {}
      });
    }
  } catch (error) {
    return res.status(500).json({
      message: error.message
    });
  }
};

const getCandidateLocationById = async (req, res, err) => {
  try {
    const candidate_location = await models.candidate_location.findAll({
      where: {
        candidate_locationId: req.params.id
      }
    });

    if (candidate_location.length !== 0) {
      return res.status(200).json({
        message: "Success get data candidate_location by id",
        data: candidate_location
      });
    } else {
      return res.status(404).json({
        message: "Data candidate_location is not found",
        data: {}
      });
    }
  } catch (error) {
    return res.status(500).json({
      message: error.message
    });
  }
};

const createCandidateLocation = async (req, res, err) => {
  try {
    console.log(req.body)
    const candidate_location = await models.candidate_location.create({
      location_name: req.body.candidateLocationName,
      address: req.body.candidateLocationAddress,
      lat: req.body.candidateLatitude,
      long: req.body.candidateLongitude
    });

    if (candidate_location) {
      return res.status(200).json({
        message: "Success insert data candidate_location",
        data: candidate_location
      });
    } else {
      return res.status(404).json({
        message: err.message
      });
    }
  } catch (error) {
    return res.status(500).json({
      message: error.message
    });
  }
};

const editCandidateLocation = async (req, res, err) => {
  try {
    const updateCandidateLocation = await models.candidate_location.update(
      {
        candidate_locationName: req.body.candidate_locationName
      },
      {
        where: {
          candidate_locationId: req.params.id
        }
      }
    );

    if (updateCandidateLocation.length !== 0) {
      return res.status(200).json({
        message: "Success update data candidate_location by id",
        data: updateCandidateLocation
      });
    } else {
      return res.status(404).json({
        message: "Data candidate_location is not found",
        data: {}
      });
    }
  } catch (error) {
    return res.status(500).json({
      message: error.message
    });
  }
};

const deleteCandidateLocation = async (req, res, err) => {
  try {
    const candidate_location = await models.candidate_location.destroy({
      where: {
        candidate_locationId: req.params.id
      }
    });

    if (candidate_location) {
      return res.status(200).json({
        message: "Success delete candidate_location by id"
      });
    } else {
      return res.status(404).json({
        message: "Data candidate_location is not found",
        data: {}
      });
    }
  } catch (error) {
    return res.status(500).json({
      message: error.message
    });
  }
};

module.exports = {
  getAllCandidateLocation,
  getCandidateLocationById,
  createCandidateLocation,
  deleteCandidateLocation,
  editCandidateLocation
};
