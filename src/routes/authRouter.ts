import express from "express";

export const authRouter = express.Router();
import { authController } from "../controllers/authController";

authRouter.get("/", (req, res) => {
  // res.send(req.user);
  res.sendStatus(200);
});

authRouter.post("/register", (req, res, next) => {
  authController.registerNewUser(req, res);
});

authRouter.post("/login", (req, res, next) => {
  authController.login(req, res);
});
