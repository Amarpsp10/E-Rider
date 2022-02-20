import { config } from './config'
import firebase from 'firebase'

const app = firebase.initializeApp(config)
const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export {auth,db,storage,provider,app}