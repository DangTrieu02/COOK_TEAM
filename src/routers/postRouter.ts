import {Router} from "express";
import postController from "../controllers/postController";
import {auth} from "../middlewares/auth";

const postRouter = Router();
postRouter.use(auth)
postRouter.get('/',postController.findAll)
postRouter.post('/',postController.addPostToUser)
postRouter.put('/:id',postController.updatePostToUser)
postRouter.delete('/:id',postController.deletePostToUser)

export default postRouter