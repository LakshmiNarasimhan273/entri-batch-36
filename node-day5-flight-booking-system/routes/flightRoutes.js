const express = require("express");
const router = express.Router();
const { getFlights, addFlight, updateFlight, deleteFlight } = require("../controllers/flightController");
const checkRole = require("../middleware/roleMiddleware");

router.get("/flights", getFlights);
router.post("/flights", checkRole(["admin"]), addFlight);
router.put("/flights/:id", checkRole(["admin"]), updateFlight);
router.delete("/flights/:id", checkRole(["admin"]), deleteFlight);

module.exports = router;