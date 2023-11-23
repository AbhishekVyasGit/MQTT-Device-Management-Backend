const Device = require('../models/deviceModel');
const authenticateDevice = (req, res, next) => {
    const { deviceId, apiKey } = req.body;
  
    Device.findOne({ deviceId, apiKey })
      .then((device) => {
        if (!device) {
          return res.status(401).json({ error: 'Unauthorized - Invalid credentials' });
        }
  
        req.device = device;
        next();
      })
      .catch((error) => {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
      });
  }
  
  module.exports = authenticateDevice;
  