import { Router } from "express";
import e2eRouter from "./e2eRouter.js";
import testRouter from "./testRouter.js";
import authRouter from "./authRouter.js";
import userRouter from "./userRouter.js";
import booksRouter from "./booksRouter.js";
import authorsRouter from "./authorsRouter.js";
import groupsRouter from "./groupsRouter.js";


const router = Router();
router.use(authRouter);
router.use(userRouter);
router.use(booksRouter)
router.use(authorsRouter)
router.use(groupsRouter)


if (process.env.NODE_ENV === "test") {
    router.use(testRouter);
    router.use(e2eRouter);
}
export default router;