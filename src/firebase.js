import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyBaP9N1kexbYfh9x7sY79qi95IpJ-L1MfY",
  authDomain: "smart-health-system-b67dc.firebaseapp.com",
  databaseURL: "https://smart-health-system-b67dc-default-rtdb.asia-southeast1.firebasedatabase.app/",
  projectId: "smart-health-system-b67dc",
  storageBucket: "smart-health-system-b67dc.firebasestorage.app",
  messagingSenderId: "762061996406",
  appId: "1:762061996406:web:74c10043bcccca487b3a57",
  measurementId: "G-QL6RKMBP1Z"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getDatabase(app);



