import Joi, { allow } from "joi";
import { CreateGroupData, CreateParticipantData } from "../03-services/groupsService";


const groupSchema = Joi.object<CreateGroupData>({
    title: Joi.string().required(),
    description: Joi.string().required(),
    profileImg: Joi.string().uri().required(),
    owner_id: Joi.number().min(1).required(),
    privacy_id: Joi.number().min(1).required()   
});
const participantSchema = Joi.object<CreateParticipantData>({
  user_id: Joi.number().min(1).required(),
  group_id: Joi.number().min(1).required()
})

export {
  groupSchema,
  participantSchema

}