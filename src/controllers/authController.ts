import { Request, Response } from 'express';
import authService from '../services/authService';

export const authController = {
    
    login: async (req: Request, res: Response) => {
        console.log("login body", req.body);
        try {
            const { Email, Mot_De_Passe } = req.body;
            const token = await authService.login(Email, Mot_De_Passe);
            if (token) {
                res.json({ token });
            } else {
                res.status(401).json({ message: 'Invalid credentials' });
            }
        } catch (error: any) {
            res.status(500).json({ error: error.message });
        }
    }
};
