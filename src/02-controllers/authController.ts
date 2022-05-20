import { Request, Response } from "express";
import authService from "../03-services/authService.js";

async function signUp(req: Request, res: Response) {
    const user = req.body;

    await authService.signUp(user);

    res.sendStatus(201);

}

async function signIn(req: Request, res: Response) {
  const user = req.body;

  const token = await authService.signIn(user);

  res.send({ token });
}


export default {
    signUp,
    signIn
};