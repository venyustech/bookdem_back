import { Request, Response } from "express";
import authorService from "../03-services/authorService.js";

async function insert(req: Request, res: Response) {
    const author = req.body;
    await authorService.insert(author)
    res.sendStatus(201)
}

export default {
    insert,
};