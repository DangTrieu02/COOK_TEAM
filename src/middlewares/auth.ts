import jwt from "jsonwebtoken";
import userService from "../services/userService";
export let SECRET_KEY = "hihihaha";

export async function checkRegister(req, res, next) {
  let checkName = await userService.find(req.body.email);
  console.log(checkName, 11111);
  if (checkName.length != 0) {
    return res.status(201).json("tai khoan da ton tai !");
  } else {
    return next();
  }
}

export const auth = (req, res, next) => {
  let authorization = req.headers.authorization;
  if (authorization) {
    let accessToken = authorization.split(" ")[1];
    if (accessToken) {
      jwt.verify(accessToken, SECRET_KEY, (err, payload) => {
        if (err) {
          res.status(401).json({
            error: err.message,
            message: "Bạn k có quyền",
          });
        } else {
          req.decode = payload;
          return next();
        }
      });
    } else {
      res.status(401).json({
        message: "Bạn k có quyền",
      });
    }
  } else {
    res.status(401).json({
      message: "Bạn k có quyền",
    });
  }
};
