import express from 'express';
import db from './config/dbConnect.js';
import books from './models/Book.js';

db.on('error', console.log.bind(console, 'Connection error'));
db.once('open', () => {
    console.log('DB Connection successful');
});

// const books = [
//     {
//         id: 1,
//         title: 'JavaScript',
//     },
//     { id: 2, title: 'C#' },
// ];

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.status(200).send('Rest Api');
});

app.get('/books', (req, res) => {
    books.find((err, books) => {
        res.status(200).json(books);
    });
});

app.post('/books', (req, res) => {
    console.log(req.body);
    books.push(req.body);
    res.status(201).send('Book added');
});

app.put('/books/:id', (req, res) => {
    const { id } = req.params;
    const index = findBook(id);
    books[index].title = req.body.title;
    res.json(books);
});

app.get('/books/:id', (req, res) => {
    const { id } = req.params;
    const index = findBook(id);
    res.json(books[index]);
});

app.delete('/books/:id', (req, res) => {
    const { id } = req.params;
    const index = findBook(id);
    books.splice(index, 1);
    res.send(`Book ${id} deleted`);
});

function findBook(id) {
    return books.findIndex((book) => book.id == id);
}

export default app;
