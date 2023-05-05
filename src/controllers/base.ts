import jwt from "jsonwebtoken"
import { SECRET_KEY } from "../middlewares/auth";


    export function getToken(req, res){
        let auth = req.headers.authorization
        let token = auth.split(' ')[1]
        let userSub = jwt.verify(token, SECRET_KEY);
        return userSub
    }   