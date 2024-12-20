
const express = require("express");
const Costume = require("../models/Costume"); // Import the Costume model
const router = express.Router();

// Create a new costume
router.post("/", (req, res) => {
  const costume = new Costume(req.body);
  costume.save().then(savedCostume => res.status(201).json(savedCostume));
});

// Get all costumes
router.get("/", (req, res) => {
  Costume.find().then(costumes => res.status(200).json(costumes));
});

// Update a costume
router.put("/:id", (req, res) => {
  Costume.findByIdAndUpdate(req.params.id, req.body, { new: true }).then(updatedCostume =>
    res.status(200).json(updatedCostume)
  );
});

// Delete a costume
router.delete("/:id", (req, res) => {
  Costume.findByIdAndDelete(req.params.id).then(() => res.status(204).end());
});

module.exports = router;