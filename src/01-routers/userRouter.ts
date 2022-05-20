import { Router } from "express";
import userControllers from "../02-controllers/userControllers.js";
import { ensureAuthenticatedMiddleware } from "../02-middlewares/ensureAuthenticatedMiddleware.js";


const userRouter = Router();

userRouter.get('/user', ensureAuthenticatedMiddleware, userControllers.getUser);

export default userRouter;