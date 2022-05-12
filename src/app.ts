import "./setup.js";
import cors from "cors";
import express, { json } from "express";
import "express-async-errors";
import router from "./routers/index.js";


const app = express();
app.use(json());
app.use(cors());
app.use(router);


export default app;