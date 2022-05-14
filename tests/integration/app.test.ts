import { prisma } from "../../src/database.js";

describe("Integration Tests", () => {
  describe("POST /sign-up", () => {
    beforeEach(async () => {
      await prisma.$executeRaw`TRUNCATE TABLE users;`;
    });

    it.todo("should persist the user given a valid body");
  });
});
