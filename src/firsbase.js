import { initializeApp } from 'firebase/app'
import {getAuth} from 'firebase/auth'


const firebaseConfig = {
    apiKey: "AIzaSyAJmsAqmtxv1Xi1jqXBX0UhaL9xAUL2kk0",
    authDomain: "auth-form-f7e77.firebaseapp.com",
    projectId: "auth-form-f7e77",
    storageBucket: "auth-form-f7e77.appspot.com",
    messagingSenderId: "753841824442",
    appId: "1:753841824442:web:13b45e7eb467930db01883"
  }
  
// Initialize Firebase and Firebase Authentication
const app = initializeApp(firebaseConfig)
const auth = getAuth(app)

export {auth}