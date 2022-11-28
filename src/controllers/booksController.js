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
}
