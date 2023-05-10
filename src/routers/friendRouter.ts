import express from 'express';
import friendController from '../controllers/friendController';
let friendRouter = express.Router();

friendRouter.get('/',friendController.getFriendById)
friendRouter.get('/not',friendController.getAll)
friendRouter.post('/',friendController.create)
friendRouter.get('/wait',friendController.waitList)
friendRouter.patch('/',friendController.confirm)
friendRouter.delete('/',friendController.remove)

export default friendRouter