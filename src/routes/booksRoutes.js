import express from 'express';
import BookController from '../controllers/booksController.js';

const router = express.Router();

router
    .get('/books', BookController.listBooks)
    .get('/books/:id', BookController.listBookFromId)
    .post('/books', BookController.createBook)
    .put('/books/:id', BookController.updateBook);

export default router;
