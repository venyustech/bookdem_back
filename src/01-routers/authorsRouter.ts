import { Router } from "express";
import authorController from "../02-controllers/authorController.js";
import { ensureAuthenticatedMiddleware } from "../02-middlewares/ensureAuthenticatedMiddleware.js";
import { validateSchemaMiddleware } from "../02-middlewares/validateSchemaMiddleware.js";
import { authorSchema } from "../schemas/authorSchema.js";


const authorsRouter = Router();

authorsRouter.post('/author', ensureAuthenticatedMiddleware,validateSchemaMiddleware(authorSchema),authorController.insert);

export default authorsRouter;