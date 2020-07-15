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
app.use(function (req, res, next) {
  // Website you wish to allow to connect
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");

  // Request methods you wish to allow
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );

  // Request headers you wish to allow
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type"
  );

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader("Access-Control-Allow-Credentials", true);

  // Pass to next layer of middleware
  next();
});

//route middleware
app.use("/topics", topicRoutes);
app.use("/resources", resourceRoutes);
app.use(userRoutes);

router.get("/", (req, res) => {
  res.send("hello world");
});

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now listening on port ${PORT}!`);
});
