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
router.get("/users", usersController.browseUsers);
router.get("/users/:id", usersController.readUser);
router.post("/register", hashPassword, usersController.addUser);
router.put("users/id", usersController.editUser);
router.delete("users/:id", usersController.destroyUser);

router.get("/messages", messagesController.browseMessages);
router.get("/messages/:id", messagesController.readMessage);
router.post("/messages", messagesController.addMessage);
router.put("messages/id", messagesController.editMessage);
router.delete("messages/:id", messagesController.destroyMessage);

router.post("/uploads", upload.single("photo"), uploadFile.postFile);

router.get("/ads", adsController.browseAds);
router.get("/user/:id/ads", adsController.browseUsersAds);
router.get("/ads/:id", adsController.readAd);
router.post("/ads", adsController.addAd);
router.put("ads/id", adsController.editAd);
router.delete("ads/:id", adsController.destroyAd);

module.exports = router;
