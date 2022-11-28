import express from 'express';
import books from './booksRoutes.js';
import authors from './authorsRoutes.js';

export default (app) => {
    app.route('/').get((req, res) => res.status(200).send({ title: 'Rest Api' }));

    app.use(express.json(), books, authors);
};
