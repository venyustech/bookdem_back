import { Request, Response } from "express";

async function signUp(req: Request, res: Response) {
    res.sendStatus(201);
}

async function signIn(req: Request, res: Response) {
    res.sendStatus(201);

}

export default {
    signUp,
    signIn,
};