import Joi from "joi";
import { CreateUserData } from "../03-services/userService.js";

const userSchema = Joi.object<CreateUserData>({
  email: Joi.string(),
  username: Joi.string().required(),
  password: Joi.string().required(),
  profileImg: Joi.string(),
  backgroungImg: Joi.string(),
  description: Joi.string().required()
});

const loginSchema = Joi.object<CreateUserData>({
  username: Joi.string().required(),
  password: Joi.string().required(),
});

export {
  userSchema,
  loginSchema 

}
