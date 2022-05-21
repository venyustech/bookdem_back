import { Request, Response } from "express";
import booksService from "../03-services/booksService.js";

async function insert(req: Request, res: Response) {
    const book = req.body;
    await booksService.insert(book)
    res.sendStatus(201)
}



export default {
    insert,
};