const express = require("express");
const router = express.Router();
const {bookFlight} = require("../controllers/bookingController");
const checkRole = require("../middleware/roleMiddleware");

router.post("/book", checkRole(["user"]), bookFlight);

module.exports = router;