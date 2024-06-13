import connectDB from '../config/db';

const getUserByEmail = async (email: string) => {
    try {
        const db = await connectDB();
        const [results]: Array<any> = await db.query('SELECT * FROM users WHERE email = ?', [email]);
        return results[0];
    } catch (error) {
        throw error;
    }
};

const getAllUsers = async () => {
    try {
        const db = await connectDB();
        const [results] = await db.query('SELECT * FROM users');
        return results;
    } catch (error) {
        throw error;
    }
};

const createUser = async (userData: any) => {
    try {
        const db = await connectDB();
        const [results] = await db.query('INSERT INTO users SET ?', userData);
        return results;
    } catch (error) {
        throw error;
    }
};

export default { getUserByEmail, getAllUsers, createUser };
