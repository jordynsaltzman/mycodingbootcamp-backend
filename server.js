const express = require("express");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv");
const router = express.Router();

// import routes
const topicRoutes = require("./routes/topics");
const resourceRoutes = require("./routes/resources");
const userRoutes = require("./routes/users");

const PORT = process.env.PORT || 5000;

dotenv.config();

// middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

//route middleware
app.use("/topics", topicRoutes);
app.use("/resources", resourceRoutes);
app.use(userRoutes);

router.get("/", (req, res) => {
  res.send("hello world");
});
// Serve up static assets on heroku
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now listening on port ${PORT}!`);
});
