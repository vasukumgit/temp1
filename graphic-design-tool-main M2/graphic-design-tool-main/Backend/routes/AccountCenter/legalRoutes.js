const express = require("express");
const router = express.Router();
 
const {
  getTerms,
  getPrivacy,
  getCookies,
  getAcceptableUse,
  getThirdPartyLicenses,
} = require("../../controllers/AccountCenter/legalController");
 
// GET Legal Routes.
router.get("/terms", getTerms);
router.get("/privacy", getPrivacy);
router.get("/cookies", getCookies);
router.get("/acceptable-use", getAcceptableUse);
router.get("/third-party-licenses", getThirdPartyLicenses);
 
module.exports = router;
 