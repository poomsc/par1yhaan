import { database } from 'services/firebase';
import { increasePartyId, getCurrentPartyId } from 'utils/serviceUtils';

type userDataType = {
  uid: string;
  email: string;
  favoriteList: number[];
  joinedPartyList: number[];
};

async function writeUserData({ uid, email, favoriteList, joinedPartyList }: userDataType) {
  database.ref('users/' + uid).set({
    email,
    favoriteList,
    joinedPartyList,
  });
}

async function readUserData(uid: string) {
  const response = await database
    .ref()
    .child('users/' + uid)
    .get();
  return response.val();
}

async function createParty(data: any) {
  await increasePartyId();
  const partyId = await getCurrentPartyId();
  await database.ref('party/' + partyId).set(data);
  return partyId;
}

async function getAllParty() {
  const response = await database.ref().child('party').get();
  return response.val();
}

async function updateCurrentDenominator(partyId: number, newDenominator: number) {
  // var updates: any;
  // updates['/party/' + partyId + '/currentDenominator'] = newDenominator;
  return await database.ref().child('/party/' + partyId).update({'currentDenominator': newDenominator});
}

export { writeUserData, readUserData, createParty, getAllParty, updateCurrentDenominator };
