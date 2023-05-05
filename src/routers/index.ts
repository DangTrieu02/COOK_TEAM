import {Router} from "express";
import userRouter from "./userRouter";
import friendRouter from "./friendRouter";

const router = Router();
router.use('/auth',userRouter)
router.use('/friend',friendRouter)
export default router;