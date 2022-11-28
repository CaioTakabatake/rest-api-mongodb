import mongoose, { mongo } from 'mongoose';

const bookSchema = new mongoose.Schema({
    id: { type: String },
    title: { type: String, required: true },
    author: { type: String, required: true },
    company: { type: String, required: true },
    pages: { type: Number },
});

export default mongoose.model('books', bookSchema);
