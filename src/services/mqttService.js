
const mqtt = require('mqtt');

// MQTT Broker
const mqttBroker = 'mqtt://broker.hivemq.com:1883';
const client = mqtt.connect(mqttBroker);

client.on('connect', () => {
  console.log('Connected to MQTT broker');
});

client.on('message', (topic, message) => {
  console.log(`Received message on topic: ${topic.toString()} and message: ${message.toString()}`);
});

client.on('offline', () => {
  console.log('Client is offline');
});

client.on('reconnect', () => {
  console.log('Reconnecting to MQTT broker');
});

client.on('end', () => { 
  console.log('Connection to MQTT broker ended');
});


client.on('error', (err) => {
  console.error('Error connecting to MQTT broker:', err);
});


function subscribe(topic, callback) {
  client.subscribe(topic, callback);
}

function publish(topic, message, callback) {
  client.publish(topic, message, callback);
}

module.exports = { subscribe, publish };
