import { Router } from "express";
import groupsController from "../02-controllers/groupsController.js";
import { ensureAuthenticatedMiddleware } from "../02-middlewares/ensureAuthenticatedMiddleware.js";
import { validateSchemaMiddleware } from "../02-middlewares/validateSchemaMiddleware.js";
import { groupSchema } from "../schemas/groupsSchema.js";


const groupsRouter = Router();

groupsRouter.post('/groups',
ensureAuthenticatedMiddleware,
validateSchemaMiddleware(groupSchema),
groupsController.insert
);

groupsRouter.get('/groups', ensureAuthenticatedMiddleware, groupsController.findGroups);
groupsRouter.get('/groups/user/joined', ensureAuthenticatedMiddleware, groupsController.findUserJoinedGroups);
groupsRouter.get('/groups/user/owner', ensureAuthenticatedMiddleware, groupsController.findUserOwnerGroups);


export default groupsRouter;