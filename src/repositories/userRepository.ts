import { prisma } from "../database.js";

async function findById(id: number) {
 
}
async function findByEmail(email: string) {

}

async function truncate() {
  await prisma.$executeRaw`TRUNCATE TABLE users`;
}

export default {
  findByEmail,
  findById,
  truncate
};
