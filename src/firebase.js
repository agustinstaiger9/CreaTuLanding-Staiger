// Importa lo necesario de Firebase
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; // 👈 Agregamos Firestore

// Tu configuración
const firebaseConfig = {
  apiKey: "AIzaSyCGmFpa6_08fosZsuvFk-Hz6ETjxkkaPEo",
  authDomain: "agustinstaiger-react.firebaseapp.com",
  projectId: "agustinstaiger-react",
  storageBucket: "agustinstaiger-react.firebasestorage.app",
  messagingSenderId: "593416952852",
  appId: "1:593416952852:web:9b3efc61d22cbb2a1f5b01"
};

// Inicializa la app
const app = initializeApp(firebaseConfig);

// Exportamos Firestore ya listo
export const db = getFirestore(app);
