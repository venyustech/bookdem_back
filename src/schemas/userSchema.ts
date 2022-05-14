import Joi from "joi";
import { CreateUserData } from "../services/userService.js";

export const userSchema = Joi.object<CreateUserData>({
  email: Joi.string(),
  username: Joi.string().required(),
  password: Joi.string().required(),
  profileImg: Joi.string(),
  backgroungImg: Joi.string(),
  description: Joi.string().required()
});
