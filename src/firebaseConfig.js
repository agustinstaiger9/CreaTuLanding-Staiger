// Importa la función para inicializar Firebase
import { initializeApp } from "firebase/app";

// Configuración de Firebase (la que copiaste)
const firebaseConfig = {
  apiKey: "AIzaSyCGmFpa6_08fosZsuvFk-Hz6ETjxkkaPEo",
  authDomain: "agustinstaiger-react.firebaseapp.com",
  projectId: "agustinstaiger-react",
  storageBucket: "agustinstaiger-react.firebasestorage.app",
  messagingSenderId: "593416952852",
  appId: "1:593416952852:web:9b3efc61d22cbb2a1f5b01"
};


const app = initializeApp(firebaseConfig);

export default app;
