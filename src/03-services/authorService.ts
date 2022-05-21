import { Author, Book } from "@prisma/client";
import authorsRepository from "../04-repositories/authorsRepository.js";
import { conflictError, notFoundError } from "../utils/errorUtils.js";


export type CreateAuthorData= Omit<Author, "id">;


async function insert(createAuthorData: CreateAuthorData) {
    const existingAuthor = await authorsRepository.findByName(createAuthorData.name);
    if(existingAuthor) throw conflictError("Author already exist");

    await authorsRepository.insert(createAuthorData);

}

export default {
    insert,
};
