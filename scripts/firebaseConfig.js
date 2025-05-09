// Importa les funcions necessàries dels SDKs
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
// TODO: Afegir els SDKs dels productes de Firebase que necessitis
// import { getFirestore } from "firebase/firestore";
// import { getDatabase } from "firebase/database";
// import { getStorage } from "firebase/storage";

// La teva configuració web de Firebase
const firebaseConfig = {
  apiKey: process.env.EXPO_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.EXPO_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.EXPO_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.EXPO_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.EXPO_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.EXPO_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.EXPO_PUBLIC_FIREBASE_MEASUREMENT_ID
  };

// Inicialitza Firebase
const app = initializeApp(firebaseConfig);
// Inicialitza Firebase Analytics
const analytics = getAnalytics(app);

// Exporta les instàncies dels serveis que necessitaràs
export const auth = getAuth(app);
// export const db = getFirestore(app);
// export const database = getDatabase(app);
// export const storage = getStorage(app);
