import { Author, Book } from "@prisma/client";
import authorsRepository from "../04-repositories/authorsRepository.js";
import booksRepository from "../04-repositories/booksRepository.js";
import { conflictError, notFoundError } from "../utils/errorUtils.js";


export type CreateBooksData = Omit<Book, "id">;
async function insert(createBookData: CreateBooksData) {
    const existingAuthor = await authorsRepository.findById(createBookData.authors_id)
    if(!existingAuthor)  throw notFoundError("Author not found")

    const existingBook = await booksRepository.findByTitle(createBookData.title)
    if(existingBook) throw conflictError("Book already exist")

    await booksRepository.insert(createBookData);
}

export default {
    insert,
};
