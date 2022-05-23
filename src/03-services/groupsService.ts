import { CreateUserData } from './authService';
import {  Group, ParticipantsGroup } from "@prisma/client";
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

export default {
    insert,
    findAll,
    findUserJoinedGroups,
    findUserOwnerGroups
};
