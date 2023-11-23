const mongoose = require("mongoose");

const deviceSchema = new mongoose.Schema(
  {
    deviceId: {
      type: String,
      unique: true,
      required: true,
    },
    apiKey: {
      type: String,
      unique: true,
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const Device = mongoose.model("Device", deviceSchema);

module.exports = Device;
