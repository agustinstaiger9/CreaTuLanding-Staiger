// Importa las funciones necesarias de Firebase
import { initializeApp } from "firebase/app";

// Tu configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCGmFpa6_08fosZsuvFk-Hz6ETjxkkaPEo",
  authDomain: "agustinstaiger-react.firebaseapp.com",
  projectId: "agustinstaiger-react",
  storageBucket: "agustinstaiger-react.firebasestorage.app",
  messagingSenderId: "593416952852",
  appId: "1:593416952852:web:9b3efc61d22cbb2a1f5b01"
};

// Inicializa Firebase con la configuración
const app = initializeApp(firebaseConfig);

// Exporta la aplicación de Firebase
export { app };
