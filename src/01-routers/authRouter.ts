import { Router } from "express";
import authController from "../02-controllers/authController.js";
import { ensureAuthenticatedMiddleware } from "../02-middlewares/ensureAuthenticatedMiddleware.js";
import { validateSchemaMiddleware } from "../02-middlewares/validateSchemaMiddleware.js";
import { loginSchema, userSchema } from "../schemas/userSchema.js";

const authRouter = Router();

authRouter.post( "/user/sign-up",validateSchemaMiddleware(userSchema), authController.signUp);
authRouter.post( "/user/sign-in",validateSchemaMiddleware(loginSchema),authController.signIn);

export default authRouter;