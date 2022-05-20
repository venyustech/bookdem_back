import { Router } from "express";
import e2eRouter from "./e2eRouter.js";
import testRouter from "./testRouter.js";
import authRouter from "./authRouter.js";
import userRouter from "./userRouter.js";


const router = Router();
router.use(authRouter);
router.use(userRouter);

if (process.env.NODE_ENV === "test") {
    router.use(testRouter);
    router.use(e2eRouter);
}
export default router;