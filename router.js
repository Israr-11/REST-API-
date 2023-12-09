//Importing dependencies
const router = require("express").Router();
const bookController = require("./bookController");

//Post data
router.post("/", bookController.book_create);
//Get all book
router.get("/", bookController.book_all);
//Get single book
router.get("/:bookId", bookController.book_single);
//Patch book data with specific ID
router.patch("/:bookId", bookController.book_patch);
//Delete book data with specific ID
router.delete("/:bookId", bookController.book_delete);

module.exports = router;
