"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const dotenv_1 = __importDefault(require("dotenv"));
const db_1 = __importDefault(require("./config/db"));
const userRoutes_1 = __importDefault(require("./routes/userRoutes"));
const authRoutes_1 = __importDefault(require("./routes/authRoutes"));
const cors_1 = __importDefault(require("cors"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT || 3000;
const corsOptions = {
    origin: 'http://localhost:3001', // Remplacez par l'origine de votre frontend
    optionsSuccessStatus: 200 // Pour les navigateurs anciens
};
app.use((0, cors_1.default)(corsOptions));
(0, db_1.default)().then((connection) => {
    if (connection) {
        console.log('Database connected successfully');
    }
}).catch((error) => {
    console.error('Failed to connect to database:', error);
});
app.use(body_parser_1.default.json());
app.use('/api/users', userRoutes_1.default);
app.use('/api/auth', authRoutes_1.default);
app.get('/', (req, res) => {
    res.send('Welcome to the user management API');
});
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
