import userRepository from '../repositories/userRepository';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

// const login = async (email: string, password: string) => {
//     const user = await userRepository.getUserByEmail(email);
//     if (user && bcrypt.compareSync(password, user.password)) {
//         const token = jwt.sign({ id: user.id, email: user.email }, process.env.JWT_SECRET as string, {
//             expiresIn: '1h'
//         });
//         return token;
//     }
//     return null;
// };

// export default { login };
