import mongoose from 'mongoose';
import { config } from 'dotenv';
config();

mongoose.connect(process.env.MONGO_DB_URI);
const db = mongoose.connection;

export default db;
