import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

firebase.initializeApp({
  apiKey: "AIzaSyDykxwM_872GwAcSZR0DGjAknEoNdwo_OU",
  authDomain: "tandem-code-challenge.firebaseapp.com",
  databaseURL: "https://tandem-code-challenge.firebaseio.com",
  projectId: "tandem-code-challenge",
  storageBucket: "tandem-code-challenge.appspot.com",
  messagingSenderId: "118145611462",
  appId: "1:118145611462:web:d6d098774faee4118289c7",
});

export const onValue = (path: string, cb: (val: any) => void) =>
  firebase
    .database()
    .ref(path)
    .on("value", (snap) => cb(snap.val()));

export const offValue = (path: string) =>
  firebase.database().ref(path).off("value");

export const firebaseSet = (path: string, val: any, cb: () => void) =>
  firebase.database().ref(path).set(val, cb);
