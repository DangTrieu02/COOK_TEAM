import express from 'express';
import userController from '../controllers/userController';
import { checkRegister, checkUser } from '../middlewares/auth';
let userRouter = express.Router();

userRouter.get('/',checkUser,userController.getAll)
userRouter.post('/',checkRegister,userController.register)
userRouter.post('/login',userController.login)
export default userRouter;