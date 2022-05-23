import console from "console";
import { Request, Response } from "express";
import userServices from "../03-services/userServices.js";

async function getUser(req: Request, res: Response) {
  const { user } = res.locals;
  const answerUser = await userServices.getUser(user);
  res.send(answerUser)
}


export default {
    getUser
};