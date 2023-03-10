import * as firebase from "firebase/app";
import { getFirestore, Timestamp } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDvPfM9KICrVgykryS_ZUNaCD8u-VzpJto",
    authDomain: "girehcaju.firebaseapp.com",
    projectId: "girehcaju",
    storageBucket: "girehcaju.appspot.com",
    messagingSenderId: "820739010903",
    appId: "1:820739010903:web:d6321c76facc5e377c0e12"
};


const app = firebase.initializeApp(firebaseConfig);


export const database = getFirestore(app)
