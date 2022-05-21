import {  CreateBooksData } from "../03-services/booksService.js";
import { prisma } from "../database.js";



async function insert(createBooksData: CreateBooksData) {
  return prisma.book.create({
    data: createBooksData,
  });
}
async function findByTitle(title: string) {
    return prisma.book.findFirst({
        where: { 
            title,
        },
    });
}
async function findAll() {
    return prisma.book.findMany({
      include:{
        author:true,
      }
    });
}


export default {
  insert,
  findByTitle,
  findAll
};