import { User } from "@prisma/client";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import userRepository from "../repositories/userRepository.js";
import { conflictError, notFoundError } from "../utils/errorUtils.js";


export type CreateUserData = Omit<User, "id">;
async function signUp(createUserData: CreateUserData) {
  const existingUser = await userRepository.findByUsername(createUserData.username);
  if (existingUser) throw conflictError("Username must be unique");

  const hashedPassword = bcrypt.hashSync(createUserData.password, 12);
  await userRepository.insert({ ...createUserData, password: hashedPassword });
}

async function signIn() {
}

async function findById(id: number) {
  const user = await userRepository.findById(id);
  if (!user) throw notFoundError("User not found");
  
  return user;
}

async function truncate() {
  await userRepository.truncate();
}

export default {
  signUp,
  signIn,
  findById,
  truncate,
};
