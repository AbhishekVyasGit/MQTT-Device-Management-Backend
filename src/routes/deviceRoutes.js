const express = require("express");
const { registerDevice, subscribeDevice, publishDevice } = require("../controllers/deviceController");
const authenticateDevice = require("../middleware/authentication");
const router = express.Router();

router.post("/register", registerDevice);
router.post("/subscribe", authenticateDevice, subscribeDevice);
router.post("/publish", authenticateDevice, publishDevice);

// if API is Invalid OR wrong URL 
router.all("/**", function (req, res) {
    res.status(404).send({ status: false, msg: "The api you request is not available" })
});


module.exports = router;
