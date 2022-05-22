import { CreateUserData } from './authService';
import {  Group } from "@prisma/client";
import {  notFoundError, unauthorizedError } from "../utils/errorUtils.js";
import userRepository from '../04-repositories/userRepository.js';
import groupsRepository from '../04-repositories/groupsRepository.js';


export type CreateGroupData = Omit<Group, "id">;
async function insert(createBookData: CreateGroupData, user: CreateUserData ) {
    const owner = createBookData.owner_id;
    const existingOwner = await userRepository.findById(owner)
    if(!existingOwner) throw notFoundError("Owner not found");
    if(existingOwner.email !== user.email)  throw unauthorizedError("Owner not the same of user");

    await groupsRepository.insert(createBookData)
}
async function findAll(){
    const groups= await groupsRepository.findAll();
    groups.map(group => delete group.owner.password)
    return groups;
}

export default {
    insert,
    findAll
};
