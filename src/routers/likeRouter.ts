import {Router} from "express";
import {auth} from "../middlewares/auth";
import postController from "../controllers/postController";
import likeController from "../controllers/likeController";
const likeRouter = Router()



likeRouter.get('/',likeController.getAll);
likeRouter.get('/id',likeController.getLikeByUser);
// lấy tổng số like của từng bài post = truyền query (?id=)
likeRouter.post('/',likeController.createLike);
//tạo và xóa like
likeRouter.delete('/',likeController.removeLike);
likeRouter.use(auth);
likeRouter.put('/:id',postController.updateLike)

export default likeRouter
