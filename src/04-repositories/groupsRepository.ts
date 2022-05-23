import { prisma } from '../database.js';
import { CreateGroupData, CreateParticipantData } from './../03-services/groupsService.js';


async function insert(createGroupData: CreateGroupData) {
  return prisma.group.create({
      data: createGroupData,
  })
}
async function insertParticipant(createParticipantData: CreateParticipantData ) {
  return prisma.participantsGroup.create({
    data: createParticipantData,
  })
}
async function findAll() {
  return prisma.group.findMany({
    include:{
      owner:true,
      privacy:true
    }
  })
}

async function findUserJoinedGroups(userId: number) {
  return prisma.group.findMany({    
    select:{
      ParticipantsGroup:{
        where:{
          user_id:userId
        },
        include:{
          group:true,
        }
      },
      AdminsGroup:{
        where:{
          user_id:userId
        },
        include:{
          group:true,
        }
      }
     
    }
  }) 

}
async function findUserOwnerGroups (id: number){
  return prisma.group.findMany({
    where:{
      owner_id:id,
    }
  })
}

async function findById(id: number) {
  return prisma.group.findUnique({
    where:{
      id,
    }
  })
}
async function findByTitle(title: string) {
  return prisma.group.findFirst({
    where:{
      title,
    }
  })
}
async function findFirstParticipantGroupById (id: number){
  return prisma.participantsGroup.findFirst({
    where:{
      user_id:id,
    }
  })
}

export default {
  insert,
  findAll,
  findUserJoinedGroups,
  findUserOwnerGroups,
  findById,
  findByTitle,
  insertParticipant,
  findFirstParticipantGroupById
};