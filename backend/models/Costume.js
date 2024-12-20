// models/Costume.js

const mongoose = require("mongoose");

// Define the schema for a costume
const CostumeSchema = new mongoose.Schema(
  {
    name: { type: [String], required: true }, // Array of names (e.g., ["ITSY BITSY"])
    style: { type: String, required: true }, // Costume style (e.g., "Jazz")
    size: { type: String, required: true }, // Costume size (e.g., "CS")
    color: { type: String, required: true }, // Costume color (e.g., "BLACK, TEAL")
    description: { type: String, required: true }, // Description of the costume
    details: { type: String, required: true }, // Additional details (e.g., material)
    main_image: { type: String, required: true }, // URL for the main image
    images: { type: [String], required: true }, // Array of image URLs
  },
  { timestamps: true } // Automatically add createdAt and updatedAt fields
);

// Export the model
module.exports = mongoose.model("Costume", CostumeSchema);
