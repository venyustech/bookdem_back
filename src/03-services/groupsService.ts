import { CreateUserData } from './authService';
import {  Group, ParticipantsGroup, User } from "@prisma/client";
import {  conflictError, notFoundError, unauthorizedError } from "../utils/errorUtils.js";
import userRepository from '../04-repositories/userRepository.js';
import groupsRepository from '../04-repositories/groupsRepository.js';

export type CreateGroupData = Omit<Group, "id">;
export type CreateParticipantData = Omit<ParticipantsGroup, "id">;

async function insert(createBookData: CreateGroupData, user: CreateUserData ) {

    const existingOwner = await userRepository.findById(createBookData.owner_id)
    if(!existingOwner) throw notFoundError("Owner id not found as user");

    if(existingOwner.email !== user.email)  throw unauthorizedError("Owner not the same of user");

    const existingTitle = await groupsRepository.findByTitle(createBookData.title)
    if(existingTitle) throw conflictError("Title already exist")

    await groupsRepository.insert(createBookData);
}

async function findAll(){
    const groups= await groupsRepository.findAll();
    groups.map(group => delete group.owner.password)
    return groups;
}
async function findUserJoinedGroups(id: number){
    const groups= await groupsRepository.findUserJoinedGroups(id);
    return groups;
}
async function findUserOwnerGroups(id: number){
    const groups= await groupsRepository.findUserOwnerGroups(id);
    return groups;
}

async function insertParticipant(createParticipantData: CreateParticipantData, user: CreateUserData ) {

    await checkParticipantCredentials(createParticipantData, user);

    const alreadyParticipate = await groupsRepository.findFirstParticipantGroupById(createParticipantData)
    if(alreadyParticipate) throw conflictError("User already participate")

    await groupsRepository.insertParticipant(createParticipantData); 
}

async function deleteParticipant(user: User, groupId: string) {
    if (!(/^[1-9]\d*$/.test(groupId)))
        throw unauthorizedError("params group id must be a number");

    const participantInfos: CreateParticipantData = {
        user_id:user.id,
        group_id: parseInt(groupId)
    }

    const paticipation = await groupsRepository.findFirstParticipantGroupById(participantInfos)
    if(!paticipation)
        throw notFoundError("Participant not found");
    await groupsRepository.deleteParticipant(participantInfos)
}

async function checkParticipantCredentials(participantData: CreateParticipantData, user: CreateUserData) {
    const existingUser = await userRepository.findById(participantData.user_id);
    if (!existingUser)
        throw notFoundError("User_id not found as user");

    if (existingUser.email !== user.email)
        throw unauthorizedError("User id not the same of user");
}

export default {
    insert,
    insertParticipant,
    findAll,
    findUserJoinedGroups,
    findUserOwnerGroups,
    deleteParticipant
};