import Joi from "joi";
import { CreateUserData } from "../03-services/authService.js";

const userSchema = Joi.object<CreateUserData>({
  email: Joi.string().required(),
  username: Joi.string().max(30).required(),
  password: Joi.string().required().required(),
  profileImg: Joi.string(),
  backgroungImg: Joi.string(),
  description: Joi.string()
});

const loginSchema = Joi.object<CreateUserData>({
  username: Joi.string().required(),
  password: Joi.string().required(),
});

export {
  userSchema,
  loginSchema 
}
