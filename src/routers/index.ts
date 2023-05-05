import {Router} from "express";
import userRouter from "./userRouter";
import friendRouter from "./friendRouter";
import postRouter from "./postRouter";

const router = Router();
router.use('/auth',userRouter)
router.use('/friend',friendRouter)
router.use('/post',postRouter)
export default router;