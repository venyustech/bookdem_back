import { prisma } from "../database.js";
import { CreateUserData } from "../03-services/authService.js";

async function findById(id: number) {
  return prisma.user.findUnique({
    where: {
      id,
    },
  });
}

async function findByEmail(email: string) {
  return prisma.user.findUnique({
    where: {
      email,
    },
  });
}

async function findByUsername(username: string) {
  return prisma.user.findFirst({
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
