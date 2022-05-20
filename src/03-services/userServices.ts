import { CreateUserData } from "../03-services/authService.js";

async function getUser(user: CreateUserData) {
  delete user.password
  return user;
}

export default {
  getUser,
};
