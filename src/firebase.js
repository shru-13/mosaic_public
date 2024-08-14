// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyA3SujBDT1QWenKyJaZZYutGEhhPRS3xbw',
  authDomain: 'mosaic-e82b0.firebaseapp.com',
  projectId: 'mosaic-e82b0',
  storageBucket: 'mosaic-e82b0.appspot.com',
  messagingSenderId: '954802571897',
  appId: '1:954802571897:web:71d83807a48d39717e62a8',
  measurementId: 'G-LTHLK34R8F'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firebase Authentication and Google Auth Provider
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export { auth, googleProvider };
