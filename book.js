//Importing mongoose
const mongoose = require("mongoose");

//Here we are writing schemas
const bookSchema = new mongoose.Schema(
    {
        title: String,
        author: String
    }
);

module.exports = mongoose.model("book", bookSchema);