let books = require('../data/books');

exports.getBooks = (req, res) => {
    res.json(books);
};

exports.getBook = (req, res) => {
    const book = books.find(b => b.id == req.params.id);
    if (!book) return res.status(404).json({ msg: "Book not found" });
    res.json(book);
};

exports.deleteBook = (req, res) => {
    books = books.filter(b => b.id != req.params.id);
    res.json({ msg: "Book deleted" });
};

exports.updateBook = (req, res) => {
    const book = books.find(b => b.id == req.params.id);
    if (!book) return res.status(404).json({ msg: "Book not found" });
    book.title = req.body.title || book.title;
    book.author = req.body.author || book.author;
    res.json(book);
};

exports.createBook = (req, res) => {
    const newBook = {
        id: books.length + 1,
        title: req.body.title,
        author: req.body.author
    };
    books.push(newBook);
    res.status(201).json(newBook);
};
