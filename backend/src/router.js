const express = require("express");
const multer = require("multer");

const router = express.Router();
const upload = multer({ dest: "./public/uploads/" });

const adsController = require("./controllers/adsController");
const messagesController = require("./controllers/messagesController");
const usersController = require("./controllers/usersController");
const uploadFile = require("./services/uploadFile");
const {
  hashPassword,
  verifyPassword,
  verifyToken,
} = require("./services/checkAuth");

router.post(
  "/login",
  usersController.getUserByEmailWithPasswordAndPassToNext,
  verifyPassword
);

router.get("/users/:id", verifyToken, usersController.readUser);
router.post("/register", hashPassword, usersController.addUser);
router.put("/users/:id", verifyToken, hashPassword, usersController.editUser);
router.delete("/users/:id", verifyToken, usersController.destroyUser);

router.get(
  "/users/:id/messages",
  verifyToken,
  messagesController.browseMessagesForOneUser
);
router.post("/messages", verifyToken, messagesController.addMessage);
router.delete("/messages/:id", verifyToken, messagesController.destroyMessage);

router.post("/uploads", upload.single("photo"), uploadFile.postFile);

router.get("/ads", adsController.browseAds);
router.get("/users/:id/ads", verifyToken, adsController.browseUsersAds);
router.get("/ads/:id", adsController.readAd);
router.post("/ads", verifyToken, adsController.addAd);
router.post("/ads/jointable", verifyToken, adsController.addUserAd);
router.put("/ads/:id", verifyToken, adsController.editAd);
router.delete("/ads/:id", verifyToken, adsController.destroyAd);

module.exports = router;
