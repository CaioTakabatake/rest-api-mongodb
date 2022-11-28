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

export default app;
