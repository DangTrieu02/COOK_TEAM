import likeController from "../controllers/likeController";
import {Router} from "express";
const likeRouter = Router()



likeRouter.get('/',likeController.getAll);
// lấy tổng số like của từng bài post = truyền query (?id=)
likeRouter.post('/',likeController.createLike);
//tạo và xóa like 
export default likeRouter;