import { Request, Response } from "express";
import userService from "../03-services/userService.js";

async function signUp(req: Request, res: Response) {
    const user = req.body;

    await userService.signUp(user);

    res.sendStatus(201);

}

async function signIn(req: Request, res: Response) {
  const user = req.body;

  const token = await userService.signIn(user);

  res.send({ token });
}

async function signOut(){}
async function validateToken(){}

export default {
    signUp,
    signIn,
    signOut,
    validateToken
};