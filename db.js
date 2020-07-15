const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://jordynsaltzman:Maisy1995%21@cluster0-fmmgk.mongodb.net/bootcamp?retryWrites=true&w=majority",
  {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
  },
  () => console.log("connected to db!")
);
