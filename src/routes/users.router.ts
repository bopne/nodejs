import { Router } from 'express';  
import { loginValidator } from '../middlewares/users.middleware';  
import { loginController} from '../controllers/users.controllers';
const usersRouter = Router();  

usersRouter.post('/login', loginValidator, loginController)

export default usersRouter;  