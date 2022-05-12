import { Router } from "express";
import testController from "../controllers/testController.js";

const testRouter = Router();

testRouter.get("/tests", testController.find);

export default testRouter;
