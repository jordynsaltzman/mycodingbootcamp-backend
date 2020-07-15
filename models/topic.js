const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const topicSchema = new Schema({
  topicName: {
    type: String,
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  resources: {
    type: Array,
    ref: "Resource",
  },
});

const Topic = mongoose.model("Topic", topicSchema);

module.exports = Topic;
