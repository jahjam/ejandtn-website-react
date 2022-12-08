import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: 'AIzaSyAHsUt7VQgj-8pYVCA3zuoz4wgKrsnYbHE',
  authDomain: 'day-tickets.firebaseapp.com',
  projectId: 'day-tickets',
  storageBucket: 'day-tickets.appspot.com',
  messagingSenderId: '724162215210',
  appId: '1:724162215210:web:732d8adac566d51108f253',
  measurementId: 'G-J0SGS4KV1Q',
  databaseURL:
    'https://day-tickets-default-rtdb.europe-west1.firebasedatabase.app/',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getDatabase(app);
