import { Request, Response } from 'express';
import UserService from '../services/userServices';
import Container, { Service } from 'typedi';

@Service()
class UserController {
    constructor (private readonly userService: UserService) {
        this.userService = Container.get(UserService);
    }

    async getUsers(req: Request, res: Response) {
        console.log("Ouii");
        try {
            const users = await this.userService.getUsers();
            res.status(200).json(users);
        } catch (error) {
            res.status(500).json({ message: 'Internal server error' });
        }
    }
}

export default UserController;
