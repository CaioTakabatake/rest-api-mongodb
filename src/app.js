import express from 'express';
import db from './config/dbConnect.js';
import books from './models/Book.js';
import routes from './routes/index.js';

db.on('error', console.log.bind(console, 'Connection error'));
db.once('open', () => {
    console.log('DB Connection successful');
});

const app = express();

app.use(express.json());

routes(app);

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
