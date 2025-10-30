import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth, signInAnonymously } from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: "ricardopinturas-c7d10.appspot.com", // 👈 força o domínio correto
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const storage = getStorage(app, "gs://ricardopinturas-c7d10.appspot.com"); // 👈 força uso do appspot
export const auth = getAuth(app);

signInAnonymously(auth)
  .then(() => console.log("Usuário anônimo autenticado"))
  .catch((error) => console.error("Erro ao autenticar anonimamente:", error));
