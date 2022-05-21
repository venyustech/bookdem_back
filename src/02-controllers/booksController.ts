import { Request, Response } from "express";
import booksService from "../03-services/booksService.js";

async function insert(req: Request, res: Response) {
    const book = req.body;
    await booksService.insert(book)
    return res.sendStatus(201)
}
async function findBooks(req: Request, res: Response) {
    const books = await booksService.findAll();
    res.send({books})
}


export default {
    insert,
    findBooks
};