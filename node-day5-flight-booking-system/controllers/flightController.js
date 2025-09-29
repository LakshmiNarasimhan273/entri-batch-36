const flightModal = require("../models/flightModel");

let flightId = 2;

// GET Flights API
const getFlights = (req, res) => {
    res.status(200).json(flightModal);
}

// Add Flight
const addFlight = (req, res) => {
    const {from, to, price} = req.body;
    const newFlight = {
        id: flightId++,
        from,
        to,
        price
    };
    flightModal.push(newFlight);
    res.status(201).json({message: "Flight added"});
};

// Update Flight
const updateFlight = (req, res) => {
    const id = parseInt(req.params.id);
    const{from, to, price} = req.body;

    const flight = flightModal.find(existingFlight => existingFlight.id === id);

    if(flight){
        // Update logic
        flight.from = from ?? flight.from;
        flight.to = to ?? flight.to;
        flight.price = price ?? flight.price;
        res.status(200).json({message: "Flight information updated"});
    }else{
        res.status(404).json({message: "Flight Not Found"});
    }
}

// Delete Flight
const deleteFlight = (req, res) => {
    const id = parseInt(req.params.id);
    const flightIndex = flightModal.findIndex(flight => flight.id === id);

    if(flightId !== -1){
        const deletedFlight = flightModal.splice(flightIndex, 1);
        res.status(200).json({message: "Flight Deleted"});
    }else{
        res.status(404).json({message: "Flight Not Found"});
    }
}

module.exports = {getFlights, addFlight, updateFlight, deleteFlight};