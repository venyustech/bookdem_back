import { Router } from "express";
import testController from "../02-controllers/testController.js";

const testRouter = Router();

testRouter.get("/tests", testController.find);

export default testRouter;
