const express = require("express");
const router = express.Router();

const adsController = require("./controllers/adsController");
const messagesController = require("./controllers/messagesController");
const usersController = require("./controllers/usersController");

router.get("/users", usersController.browseUsers);
router.get("/users/:id", usersController.readUser);
router.post("/users", usersController.addUser);
router.put("users/id", usersController.editUser);
router.delete("users/:id", usersController.destroyUser);

router.get("/messages", messagesController.browseMessages);
router.get("/messages/:id", messagesController.readMessage);
router.post("/messages", messagesController.addMessage);
router.put("messages/id", messagesController.editMessage);
router.delete("messages/:id", messagesController.destroyMessage);

router.get("/ads", adsController.browseAds);
router.get("/ads/:id", adsController.readAd);
router.post("/ads", adsController.addAd);
router.put("ads/id", adsController.editAd);
router.delete("ads/:id", adsController.destroyAd);

module.exports = router;
