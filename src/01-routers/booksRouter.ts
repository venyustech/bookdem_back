import { Router } from "express";
import booksController from "../02-controllers/booksController.js";
import { ensureAuthenticatedMiddleware } from "../02-middlewares/ensureAuthenticatedMiddleware.js";
import { validateSchemaMiddleware } from "../02-middlewares/validateSchemaMiddleware.js";
import { bookSchema } from "../schemas/booksSchema.js";


const booksRouter = Router();

booksRouter.post('/books', ensureAuthenticatedMiddleware,validateSchemaMiddleware(bookSchema),booksController.insert);
booksRouter.get('/books', ensureAuthenticatedMiddleware, booksController.findBooks);

export default booksRouter;