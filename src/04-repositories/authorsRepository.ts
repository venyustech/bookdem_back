import { CreateAuthorData } from "../03-services/authorService.js";
import { prisma } from "../database.js";

async function findById(id: number) {
    return prisma.author.findUnique({
        where: { 
            id,
        },
    });
}
async function findByName(name: string) {
    return prisma.author.findUnique({
        where: { 
            name,
        },
    });
}
async function insert(createAuthorData: CreateAuthorData) {
  return prisma.author.create({
    data: createAuthorData,
  });
}

export default {
  findById,
  findByName,
  insert
};