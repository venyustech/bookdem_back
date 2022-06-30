import { Request, Response } from "express";
import groupsService from "../03-services/groupsService.js";

async function insert(req: Request, res: Response) {
    const { user } = res.locals;
    const group = req.body;
    await groupsService.insert(group, user)
    return res.sendStatus(201)
}
async function insertParticipant(req: Request, res: Response) {
    const { user } = res.locals;
    const participantInfos = req.body;
    await groupsService.insertParticipant(participantInfos, user)
    return res.sendStatus(201)
}
async function findGroups(req: Request, res: Response) {
    const groups = await groupsService.findAll();
    res.send({groups})
}

async function findUserJoinedGroups(req: Request, res: Response) {
    const { user } = res.locals;
    const groups = await groupsService.findUserJoinedGroups(user.id);
    res.send({groups})
}
async function findUserOwnerGroups(req: Request, res: Response) {
    const { user } = res.locals;
    const groups = await groupsService.findUserOwnerGroups(user.id);
    res.send({groups})
}

async function deleteParticipant(req: Request, res: Response) {
    const { user } = res.locals;
    const{groupId}= req.params;
    await groupsService.deleteParticipant(user, groupId)
    return res.sendStatus(200)
}



export default {
    insert,
    findGroups,
    findUserJoinedGroups,
    findUserOwnerGroups,
    insertParticipant,
    deleteParticipant
};