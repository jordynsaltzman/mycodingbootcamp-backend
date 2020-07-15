const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const resourceSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  completed: {
    type: Boolean,
    default: false,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
  type: {
    type: String,
  },
  topic: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Topic",
  },
});

const Resource = mongoose.model("Resource", resourceSchema);

module.exports = Resource;
