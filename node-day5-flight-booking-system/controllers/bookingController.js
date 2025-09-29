const flightModal = require("../models/flightModel");

const bookFlight = (req, res) => {
    const {flightId} = req.body;
    const flight = flightModal.find(existingFlight => existingFlight.id === flightId);

    if(!flight){
        return res.status(404).json({message: "Flight Not Found"});
    }
    res.status(200).json({message: "Flight Booked Successfully", flight});
}

module.exports = {bookFlight};