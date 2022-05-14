import { prisma } from "../database.js";
import { CreateUserData } from "../services/userService.js";

async function findById(id: number) {
  return prisma.user.findUnique({
    where: {
      id,
    },
  });
}

async function findByEmail(email: string) {

}

async function findByUsername(username: string) {
  return prisma.user.findUnique({
    where: {
      username,
    },
  });
}

async function insert(createUserData: CreateUserData) {
  return prisma.user.create({
    data: createUserData,
  });
}
async function truncate() {
  await prisma.$executeRaw`TRUNCATE TABLE users`;
}

export default {
  findByEmail,
  findById,
  findByUsername,
  insert,
  truncate
};
