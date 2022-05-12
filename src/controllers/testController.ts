import { Request, Response } from "express";

async function find(req: Request, res: Response) {
  res.sendStatus(201);
}

export default {
  find
};
