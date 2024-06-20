import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import connectDB from './config/db';
import userRoutes from './routes/userRoutes';
import authRoutes from './routes/authRoutes';
import cors from 'cors';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

const corsOptions = {
    origin: 'http://localhost:3001', // Remplacez par l'origine de votre frontend
    optionsSuccessStatus: 200 // Pour les navigateurs anciens
};

app.use(cors(corsOptions));

connectDB().then((connection: any) => {
    if (connection) {
        console.log('Database connected successfully');
    }
}).catch((error: any) => {
    console.error('Failed to connect to database:', error);
});

app.use(bodyParser.json());

app.use('/api/users', userRoutes);
app.use('/api/auth', authRoutes);

app.get('/', (req, res) => {
    res.send('Welcome to the user management API');
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
