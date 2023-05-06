import {Router} from "express";
import userRouter from "./userRouter";
import friendRouter from "./friendRouter";
import postRouter from "./postRouter";
import commentRouter from "./commentRouter";

const router = Router();
router.use('/auth',userRouter)
router.use('/friend',friendRouter)
router.use('/post',postRouter)
router.use('/comment',commentRouter)
export default router;