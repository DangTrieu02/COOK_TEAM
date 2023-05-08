import {Router} from "express";
import {auth} from "../middlewares/auth";
import postController from "../controllers/postController";
import likeController from "../controllers/likeController";
const likeRouter = Router()



likeRouter.get('/',likeController.getAll);
// lấy tổng số like của từng bài post = truyền query (?id=)
likeRouter.post('/',likeController.createLike);
//tạo và xóa like

likeRouter.use(auth);
likeRouter.put('/:id',postController.updateLike)


export default likeRouter
