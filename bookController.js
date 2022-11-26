//In this file I am Controlling the logic of Book's addition in DataBase
const book = require("./book");

//Get All the books
const book_all = async (req, res) => {
    try {
        const books = await book.find();
        res.json(books);

    } catch (error) {
        res.json({ message: error });
    }
};

//Get single book
const book_single = async (req, res) => {
    try {
        const book_one = await book.findById(req.params.bookId);
        res.json(book_one);

    } catch (error) {
        res.json({ message: error });
    }
};

//Add new Book
const book_create = async (req, res) => {
    const router = new book({
        title: req.body.title,
        author: req.body.author
    });
    try {
        const savedBook = await router.save();
        res.send(savedBook);
    } catch (error) {
        res.status(400).send(error);
    }
};

//Patch book
const book_patch = async (req, res) => {
    try {
        const router = {
            title: req.body.title,
            author: req.body.author
        };
        const updateBook = await book.findByIdAndUpdate(
            { _id: req.params.bookId }, router

        );
        res.json(updateBook);
    }
    catch (error) {
        res.status(400).send(error);
    }
};

//Delete Book
const book_delete = async (req, res) => {
    try {
        const deleteBook = await book.findByIdAndDelete(req.params.bookId);
        res.json(deleteBook);
    } catch (error) {
        res.json({ message: error });
    }
};

module.exports = {
    book_all,
    book_single,
    book_create,
    book_patch,
    book_delete
}
