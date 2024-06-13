import db from '../config/db';

const getUserByEmail = (email: string) => {
    return new Promise((resolve, reject) => {
        db.query('SELECT * FROM users WHERE email = ?', [email], (error, results) => {
            if (error) {
                return reject(error);
            }
            resolve(results[0]);
        });
    });
};

const getAllUsers = () => {
    return new Promise((resolve, reject) => {
        db.query('SELECT * FROM users', (error, results) => {
            if (error) {
                return reject(error);
            }
            resolve(results);
        });
    });
};

const createUser = (userData: any) => {
    return new Promise((resolve, reject) => {
        db.query('INSERT INTO users SET ?', userData, (error, results) => {
            if (error) {
                return reject(error);
            }
            resolve(results);
        });
    });
};

export default { getUserByEmail, getAllUsers, createUser };
