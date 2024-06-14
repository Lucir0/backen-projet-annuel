import { Request, Response } from 'express';
// import authService from '../services/authService';

// export const authController = {
    
//     login: async (req: Request, res: Response) => {
//         try {
//             const { email, password } = req.body;
//             const token = await authService.login(email, password);
//             if (token) {
//                 res.json({ token });
//             } else {
//                 res.status(401).json({ message: 'Invalid credentials' });
//             }
//         } catch (error: any) {
//             res.status(500).json({ error: error.message });
//         }
//     }
// };
