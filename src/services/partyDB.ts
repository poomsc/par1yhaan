import { database } from 'firebase';

const dbRef = database.ref('/Party');

class PartyDataService {
  getAll() {
    return dbRef;
  }

  create(data: any) {
    return dbRef.push(data);
  }

  update(key: string, value: any) {
    return dbRef.child(key).update(value);
  }

  delete(key: string) {
    return dbRef.child(key).remove();
  }

  deleteAll() {
    return dbRef.remove();
  }
}

export default new PartyDataService();
