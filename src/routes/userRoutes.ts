import { Router } from 'express';
import { userController } from '../controllers/userController';
import { authMiddleware } from '../middlewares/authMiddlesware';


const router = Router();

router.get('/', authMiddleware, userController.getUsers);
router.post('/', authMiddleware, userController.createUser);

export default router;
