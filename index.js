//Importing dependencies
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

//Calling exress and dotenv
const app = express();
dotenv.config();

//Database connection (MongodB cloud)
mongoose.connect(
  process.env.DB_CONNECTION,
  { useUnifiedTopology: true, useNewUrlParser: true },
  () => {
    console.log("Connected to MongodB Database");
  }
);

//importing routes
const bookRoutes = require("./router");

//Middlewares
app.use(express.json()); //Data should be json when submitted for post from frontend
app.use(cors());
app.use("/api/books", bookRoutes);

//Litening at a port
const port = process.env.PORT || 9000;
app.listen(port, () => {
  console.log("Listening");
});
