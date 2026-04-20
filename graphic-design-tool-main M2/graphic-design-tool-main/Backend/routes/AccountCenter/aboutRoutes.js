const express = require("express");
const router = express.Router();
 
const { getAbout } = require("../../controllers/AccountCenter/aboutController");
 
// GET About.
router.get("/", getAbout);
 
module.exports = router;
 