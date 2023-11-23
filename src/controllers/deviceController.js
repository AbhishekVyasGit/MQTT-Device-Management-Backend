
const express = require('express');
const router = express.Router();
const { v4: uuidv4 } = require('uuid');
const Device = require('../models/deviceModel');
const mqttService = require('../services/mqttService');


const registerDevice =  async (req, res) => {
  const { deviceId } = req.body;
  const apiKey = uuidv4();

  try {
    await Device.create({ deviceId, apiKey });
    res.json({ apiKey });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to register device' });
  }
};


const subscribeDevice =  (req, res) => {
  const { deviceId } = req.device;
  const topic = `devices/${deviceId}`;

  mqttService.subscribe(topic, (err) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'Failed to subscribe to topic' });
    } else {
      res.json({ message: `Subscribed to topic '${topic}' successfully` });
    }
  });
};


const publishDevice = (req, res) => {
  const { deviceId } = req.device;
  const { message } = req.body;
  const topic = `devices/${deviceId}`;

  mqttService.publish(topic, message, (err) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'Failed to publish message' });
    } else {
      res.json({ message: 'Published message successfully' });
    }
  });
};


module.exports = {registerDevice, subscribeDevice, publishDevice};