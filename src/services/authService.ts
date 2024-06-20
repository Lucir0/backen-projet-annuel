import userRepository from '../repositories/userRepository';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const login = async (Email: string, Mot_De_Passe: string) => {
    try {
        console.log("EMAIL Service : ", Email);
        const user = await userRepository.getUserByEmail(Email);
        console.log("USER : ", user);
        if (user && Mot_De_Passe === user.Mot_De_Passe) {
            const token = jwt.sign({ id: user.ID_Admin, Email: user.Email }, process.env.JWT_SECRET as string, {
               // pas d'expiration pour le token
            });
            console.log("TOKEN : ", token);
            return [token, user];
        }
        console.log("Invalid credentials");
        return null;
    } catch (error) {
        console.error("Error in login service:", error);
        throw new Error('Internal server error');
    }
};



export default { login };
