const Topic = require("../models/topic");
const Resource = require("../models/resource");

module.exports = {
  createNewTopic: (req, res) => {
    try {
      let topic = new Topic();
      console.log(topic);

      topic["topicName"] = req.body.topicName;
      topic["user"] = req.user._id;

      topic.save().then((doc) => {
        res.send(doc);
      });
    } catch (err) {
      console.log(err);
    }
  },

  findTopicByUser: (req, res) => {
    Topic.find({ user: req.user._id }).then((doc) => {
      res.send(doc);
    });
  },

  findTopicById: (req, res) => {
    Topic.find({ _id: req.params.id }).then((topic) => {
      res.send(topic);
    });
  },

  deleteTopic: (req, res) => {
    Topic.findByIdAndRemove({ _id: req.params.id }).then((doc) =>
      res.send(doc)
    );
  },
};
