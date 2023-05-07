import {Router} from "express";
import userRouter from "./userRouter";
import friendRouter from "./friendRouter";
import postRouter from "./postRouter";
import commentRouter from "./commentRouter";
import likeRouter from "./likeRouter";

const router = Router();
router.use('/auth',userRouter)
router.use('/friend',friendRouter)
router.use('/post',postRouter)
router.use('/comment',commentRouter)
router.use('/like',likeRouter)
export default router;