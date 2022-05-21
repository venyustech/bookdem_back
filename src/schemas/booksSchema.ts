import Joi, { allow } from "joi";
import { CreateBooksData } from "../03-services/booksService";


const bookSchema = Joi.object<CreateBooksData>({
    pictureUrl: Joi.string().trim().uri().required(),
    description: Joi.string().min(1).required(),
    linkToRead: Joi.string().uri().required(),
    authors_id: Joi.number().min(1).required(),
    title: Joi.string().required()
});

export {
  bookSchema
}