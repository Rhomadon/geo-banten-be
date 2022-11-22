const express = require("express");
const router = express();

const CandidateLocationRouter = require("../controllers/CandidateLocationController");

router.get("/api/candidate_location", CandidateLocationRouter.getAllCandidateLocation);
router.get("/api/candidate_location/:id", CandidateLocationRouter.getCandidateLocationById);
router.post("/api/candidate_location", CandidateLocationRouter.createCandidateLocation);
router.delete("/api/candidate_location/:id", CandidateLocationRouter.deleteCandidateLocation);
router.patch("/api/candidate_location/:id", CandidateLocationRouter.editCandidateLocation);

module.exports = router;
