import express from 'express';
import friendController from '../controllers/friendController';
let friendRouter = express.Router();

friendRouter.get('/',friendController.getAll)
friendRouter.post('/',friendController.create)

export default friendRouter