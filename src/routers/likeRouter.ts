import {Router} from "express";
import {auth} from "../middlewares/auth";
import postController from "../controllers/postController";

const likeRouter = Router();
likeRouter.use(auth);
likeRouter.put('/:id',postController.updateLike)


export default likeRouter
