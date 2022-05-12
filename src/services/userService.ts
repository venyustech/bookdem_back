import userRepository from "../repositories/userRepository.js";

async function signUp() {
}

async function signIn() {
}


async function truncate() {
  await userRepository.truncate();
}

export default {
  signUp,
  signIn,
  truncate,
};
