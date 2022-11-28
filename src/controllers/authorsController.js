import authors from '../models/Author.js';

export default class AuthorController {
    static listAuthors = (req, res) => {
        authors.find((err, authors) => {
            res.status(200).json(authors);
        });
    };

    static listAuthorFromId = (req, res) => {
        const id = req.params.id;

        authors.findById(id, (err, authors) => {
            if (err) return res.status(400).send({ message: `${err.message} - couldn't find author` });
            res.status(200).send(authors);
        });
    };

    static createAuthor = (req, res) => {
        const author = new authors(req.body);

        author.save((err) => {
            if (err) return res.status(500).send({ message: `${err} - couldn't create author` });
            res.status(201).send(author.toJSON());
        });
    };

    static updateAuthor = (req, res) => {
        const id = req.params.id;

        authors.findByIdAndUpdate(id, { $set: req.body }, (err) => {
            if (err) return res.status(500).send({ message: `${err.message} - couldn't update author` });
            res.status(200).send({ message: 'Author Updated' });
        });
    };

    static deleteAuthor = (req, res) => {
        const id = req.params.id;

        authors.findByIdAndDelete(id, (err) => {
            if (err) return res.status(500).send({ message: `${err.message} - couldn't delete author` });
            res.status(200).send({ message: 'Author Deleted' });
        });
    };
}
