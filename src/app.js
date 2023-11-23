
const express = require('express');
const connect = require('./configs/db');
const deviceRoutes = require('./routes/deviceRoutes');
const app = express();
const port = 3000;

app.use(express.json());

app.use('/devices', deviceRoutes);

app.listen(port, async() => {
  try {
    await connect();
    console.log("database connected successfully");
    console.log(`Server is running on port ${port}`);
  } catch (error) {
    console.log({error:error.message});
  }
});


