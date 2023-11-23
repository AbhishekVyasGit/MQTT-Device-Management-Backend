
---

# MQTT Device Management App

A Node.js application for managing MQTT devices using Express, Mongoose, and MQTT.js.

## Setup

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/mqtt-device-management-app.git
   ```

2. **Install dependencies:**

   ```bash
   cd mqtt-device-management-app
   npm install
   ```

3. **Set up MongoDB:**
   - Update the MongoDB connection string in `app.js`.

4. **Run the application:**

   ```bash
   npm start
   ```

   The server will start on `http://localhost:3000` by default.

## Usage

- **Register a Device:**

  ```http
  POST /devices/register
  ```

  Register a new device and receive an API key.

- **Subscribe to a Topic:**

  ```http
  POST /devices/subscribe
  ```

  Subscribe a device to its dedicated topic.

- **Publish a Message:**

  ```http
  POST /devices/publish
  ```

  Publish a message from a registered device to its dedicated topic.

## Testing with Postman

### 1. Register a Device:

- **Endpoint:** `POST /devices/register`
- **Body:**
  ```json
  {
    "deviceId": "yourDeviceId"
  }
  ```
- **Response:**
  ```json
  {
    "apiKey": "generatedApiKey"
  }
  ```

### 2. Subscribe to a Topic:

- **Endpoint:** `POST /devices/subscribe`
- **Body:**
  ```json
  {
    "deviceId": "yourDeviceId",
    "apiKey": "generatedApiKey"
  }
  ```
- **Response:**
  ```json
  {
    "message": "Subscribed successfully"
  }
  ```

### 3. Publish a Message:

- **Endpoint:** `POST /devices/publish`
- **Body:**
  ```json
  {
    "deviceId": "yourDeviceId",
    "apiKey": "generatedApiKey",
    "message": "Hello, MQTT World!"
  }
  ```
- **Response:**
  ```json
  {
    "message": "Published successfully"
  }
  ```

Replace `yourDeviceId` and `generatedApiKey` with actual values during device registration.

---
