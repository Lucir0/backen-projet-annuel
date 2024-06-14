import UserService from '@services/userServices';
import { Request, Response } from 'express';


const userService = new UserService();

export const getUsers = async (req: Request, res: Response) => {
  try {
    const users = await userService.getAllUsers();
    res.json(users);
  } catch (error) {
    res.status(500).send('Erreur interne du serveur');
  }
};

export const createUser = async (req: Request, res: Response) => {
  try {
    const user = await userService.addUser(req.body);
    res.status(201).json(user);
  } catch (error) {
    res.status(500).send('Erreur interne du serveur');
  }
};
