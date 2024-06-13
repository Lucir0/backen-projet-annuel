import { Request, Response } from 'express';
import userService from '../services/userService';

export const userController = {
    getUsers: async (req: Request, res: Response) => {
        try {
            const users = await userService.getUsers();
            res.json(users);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
    createUser: async (req: Request, res: Response) => {
        try {
            const user = await userService.createUser(req.body);
            res.status(201).json(user);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
};
