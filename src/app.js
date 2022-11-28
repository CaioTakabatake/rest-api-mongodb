import express from 'express';

const books = [
    {
        id: 1,
        title: 'JavaScript',
    },
    { id: 2, title: 'C#' },
];

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.status(200).send('Rest Api');
});

app.get('/books', (req, res) => {
    res.status(200).json(books);
});

app.post('/books', (req, res) => {
    console.log(req.body);
    books.push(req.body);
    res.status(201).send('Book added');
});

app.put('/books/:id', (req, res) => {
    const index = findBook(req.params.id);
    books[index].title = req.body.title;
    res.json(books);
});

app.get('/books/:id', (req, res) => {
    const index = findBook(req.params.id);
    res.json(books[index]);
});

function findBook(id) {
    return books.findIndex((book) => book.id == id);
}

export default app;
