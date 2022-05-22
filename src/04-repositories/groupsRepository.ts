import { prisma } from '../database.js';
import { CreateGroupData } from './../03-services/groupsService.js';


async function insert(createGroupData: CreateGroupData) {
  return prisma.group.create({
      data: createGroupData,
  })
}
async function findByTitle(title: string) {
    
}
async function findAll() {
  return prisma.group.findMany({
    include:{
      owner:true,
      privacy:true
    }
  })
}


export default {
  insert,
  findByTitle,
  findAll
};