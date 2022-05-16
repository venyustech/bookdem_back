import { Router } from "express";
import e2eTestsController from "../02-controllers/e2eTestsController.js";

const e2eRouter = Router();
e2eRouter.post("/e2e/truncate", e2eTestsController.truncate);
export default e2eRouter;
