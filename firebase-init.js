// Firebase initialization (modular v9+)
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.22.1/firebase-app.js';
import { getAuth } from 'https://www.gstatic.com/firebasejs/9.22.1/firebase-auth.js';
import { getFirestore } from 'https://www.gstatic.com/firebasejs/9.22.1/firebase-firestore.js';


const firebaseConfig = {
apiKey: "AIzaSyD-GTGy3sqCGdo9tMw0iuyWLWEh2srUA1w",
authDomain: "codelet-2ad97.firebaseapp.com",
projectId: "codelet-2ad97",
storageBucket: "codelet-2ad97.firebasestorage.app",
messagingSenderId: "379390074770",
appId: "1:379390074770:web:9f433d198b21aae5c9eb4b",
measurementId: "G-0YN428EFB8"
};


export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
