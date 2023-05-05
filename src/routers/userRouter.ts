import express from 'express';
import userController from '../controllers/userController';
import { checkRegister,auth} from '../middlewares/auth';
let userRouter = express.Router();

userRouter.get('/',auth,userController.getAll)
userRouter.post('/',checkRegister,userController.register)
userRouter.post('/login',userController.login)
userRouter.patch('/name',userController.updateName)
userRouter.patch('/avatar',userController.updateAvatar)
userRouter.patch('/background',userController.updateBackground)
export default userRouter;