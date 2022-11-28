import express from 'express';
import BookController from '../controllers/booksController.js';

const router = express.Router();

router.get('/books', BookController.listBooks);
router.post('/books', BookController.createBook);

export default router;
