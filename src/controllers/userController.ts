import { Request, Response } from 'express';
import userServices from '../services/userServices';


export const userController = {
    getUsers: async (req: Request, res: Response) => {
        try {
            const users = await userServices.getUsers();
            res.json(users);
        } catch (error: any) {
            res.status(500).json({ error: error.message });
        }
    },
    createUser: async (req: Request, res: Response) => {
        try {
            const user = await userServices.createUser(req.body);
            res.status(201).json(user);
        } catch (error : any) {
            res.status(500).json({ error: error.message });
        }
    }
};
