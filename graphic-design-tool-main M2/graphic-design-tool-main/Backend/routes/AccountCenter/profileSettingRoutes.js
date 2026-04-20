const express = require("express");
const router = express.Router();
 
const controller = require("../../controllers/AccountCenter/profileSettingController");
const authMiddleware = require("../../middleware/authMiddleware");
 
// GET
router.get(
  "/profile-settings",
  authMiddleware.verifyToken,
  controller.getProfileSettings
);
 
// UPDATE
router.put(
  "/profile-settings",
  authMiddleware.verifyToken,
  controller.updateProfileSettings
);
 // REQUEST UPDATE (SENDS OTP)
router.post("/profile-settings/request-update", authMiddleware.verifyToken, controller.requestProfileUpdate);
// VERIFY UPDATE (VERIFIES OTP AND UPDATES)
router.post("/profile-settings/verify-update", authMiddleware.verifyToken, controller.verifyProfileUpdate);
  
// DELETE
router.delete(
  "/profile-settings",
  authMiddleware.verifyToken,
  controller.deleteAccount
);




module.exports = router;
 
 
 