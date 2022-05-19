import "./setup.js";
import cors from "cors";
import express, { json } from "express";
import "express-async-errors";
import router from "./01-routers/index.js";
import { errorHandlerMiddleware } from "./02-middlewares/errorHandlerMiddleware.js";


const app = express();
app.use(json());
app.use(cors());
app.use(router);
app.use(errorHandlerMiddleware);


export default app;