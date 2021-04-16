import { database } from 'services/firebase';

async function getCurrentPartyId() {
  const response = await database.ref().child('lastPartyId').get();
  return response.val() | 0;
}

async function increasePartyId() {
  database.ref('lastPartyId').set((await getCurrentPartyId()) + 1);
}

export { getCurrentPartyId, increasePartyId };
