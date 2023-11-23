
const mqtt = require('mqtt');

// MQTT Broker
const mqttBroker = 'mqtt://broker.hivemq.com:1883';
const client = mqtt.connect(mqttBroker);

client.on('connect', () => {
  console.log('Connected to MQTT broker');
});

function subscribe(topic, callback) {
  client.subscribe(topic, callback);
}

function publish(topic, message, callback) {
  client.publish(topic, message, callback);
}

module.exports = { subscribe, publish };
