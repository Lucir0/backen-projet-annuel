import connectDB from '../config/db';

const getUserByEmail = async (email: string) => {
    console.log("EMAIL : ", email);
    try {
        const db = await connectDB();
        const [results]: Array<any> = await db.query('SELECT * FROM admin WHERE email = ?', [email]);
        return results[0];
    } catch (error) {
        throw error;
    }
};

const getAllUsers = async () => {
    try {
        const db = await connectDB();
        const [adminResults, suiveurResults] = await Promise.all([
            db.query('SELECT * FROM admin'),
            db.query('SELECT * FROM suiveur')
          ]);
        const results = adminResults.concat(suiveurResults);
        console.log(results);
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
