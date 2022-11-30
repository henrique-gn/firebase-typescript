import { database } from 'src/connection';
import { FirebaseDAO } from './FirebaseDAO';
// export each collection of you database
export const personDAO = new FirebaseDAO(database.collection('person'))