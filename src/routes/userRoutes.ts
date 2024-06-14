import { Router } from 'express';
import { authMiddleware } from '../middlewares/authMiddlesware';
import Container from 'typedi';
import UserController from '../controllers/userController';


const router = Router();
const userController =  Container.get(UserController);

router.get('/', authMiddleware, (req, res) => userController.getUsers(req, res));


export default router;
