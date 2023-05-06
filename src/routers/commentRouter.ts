import express from 'express';
import CommentController from '../controllers/commentController';
let commentRouter = express.Router();

commentRouter.get('/',CommentController.getAll)
commentRouter.post('/',CommentController.create)
commentRouter.get('/post',CommentController.getComment)
commentRouter.patch('/',CommentController.updateComment)
commentRouter.delete('/',CommentController.remove)
export default commentRouter;