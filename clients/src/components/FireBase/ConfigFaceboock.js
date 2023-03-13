// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { FacebookAuthProvider, getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD8UI-0l1UZn4DF9nCoBUm3KD0G5SMah1Q",
  authDomain: "tiendaropa-374212.firebaseapp.com",
  projectId: "tiendaropa-374212",
  storageBucket: "tiendaropa-374212.appspot.com",
  messagingSenderId: "410436924446",
  appId: "1:410436924446:web:b8ca584b59cb43f33d2a0f",
  measurementId: "G-FY0T473E0S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider= new FacebookAuthProvider();
provider.addScope("public_profile")
export{auth,provider}