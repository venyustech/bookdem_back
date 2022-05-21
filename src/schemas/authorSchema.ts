import Joi from "joi";
import { CreateAuthorData } from "../03-services/authorService";


const authorSchema = Joi.object<CreateAuthorData>({
    name: Joi.string().required(),
    description: Joi.string().min(2),
    pictureUrl: Joi.string().trim().uri(),
});

export {
  authorSchema
}