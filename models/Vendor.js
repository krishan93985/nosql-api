const mongoose = require("mongoose");

const vendorSchema = new mongoose.Schema({
  mobile: {
    type: Number,
    required: true,
    maxlength: 10,
  },
  Password: {
    type: String,
    required: true,
  },
});

const Vendor = mongoose.model("vendors", vendorSchema);

module.exports = Vendor;
