import { database } from 'services/firebase';
import { increasePartyId, getCurrentPartyId } from './serviceUtils';

type userDataType = {
  email: string;
  favoriteList: number[];
  joinedPartyList: number[];
};

async function writeUserData({ email, favoriteList, joinedPartyList }: userDataType) {
  database.ref('users/' + email).set({
    email,
    favoriteList,
    joinedPartyList,
  });
}

async function createParty(data: any) {
  await increasePartyId();
  const partyId = await getCurrentPartyId();
  database.ref('party/' + partyId).set(data);
}

async function getAllParty() {
  const response = await database.ref().child('party').get();
  return response.val()
}

export { writeUserData, createParty, getAllParty };
