import books from '../models/Book.js';

export default class BookController {
    static listBooks = (req, res) => {
        books.find((err, books) => {
            res.status(200).json(books);
        });
    };

    static createBook = (req, res) => {
        const livro = new books(req.body);

        livro.save((err) => {
            if (err) return res.status(500).send({ message: `${err} - couldn't create book` });
            res.status(201).send(livro.toJSON());
        });
    };

    static updateBook = (req, res) => {
        const id = req.params.id;

        books.findByIdAndUpdate(id, { $set: req.body }, (err) => {
            if (err) return res.status(500).send({ message: `${err.message} - couldn't update book` });
            res.status(200).send({ message: 'Book Updated' });
        });
    };
}
