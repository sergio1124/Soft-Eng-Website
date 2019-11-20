const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = express();

// Bodyparser middleware
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);

// DB Config
const db = require("./config/keys").mongoURI;

// Connect to MongoDB
mongoose.set("useUnifiedTopology", true);
mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("MongoDB successfully connected"))
  .catch(err => console.log(err));

const port = process.env.PORT || 5000; // process.env.port is Heroku's port.

app.listen(port, () => console.log(`Server up and running...`));