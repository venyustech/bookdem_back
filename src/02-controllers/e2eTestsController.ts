import { Request, Response } from "express";
import authService from "../03-services/authService.js";

async function truncate(req: Request, res: Response) {
  await authService.truncate();
  res.sendStatus(200);
}

export default {
  truncate,
};
