const express = require("express");
const router = express.Router();
const topicController = require("../controllers/topicsController");
const verify = require("./verifyToken");

router.post("/new", verify, topicController.createNewTopic);

router.get("/own", verify, topicController.findTopicByUser);

router.get("/:id", verify, topicController.findTopicById);

router.delete("/delete/:id", verify, topicController.deleteTopic);

module.exports = router;
