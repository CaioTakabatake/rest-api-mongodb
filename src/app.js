import express from 'express';

const books = [
    {
        id: 1,
        title: 'JavaScript',
    },
    { id: 2, title: 'C#' },
];

const app = express();

app.get('/', (req, res) => {
    res.status(200).send('Rest Api');
});

app.get('/books', (req, res) => {
    res.status(200).json(books);
});

export default app;
