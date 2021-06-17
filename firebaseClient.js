import firebase from "firebase";
const FIREBASE_CONFIG = require("./firebase.json");



export default function firebaseClient(){
  if(!firebase.apps.length){
    firebase.initializeApp(FIREBASE_CONFIG)
  }
}
