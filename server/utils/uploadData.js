const firebase = require('./firebase');
require('firebase/firestore');
const data = [
  {
    "name": "John Doe",
    "age": 25,
    "email": "johndoe@example.com",
    "password": "password123"
  },
  {
    "name": "Jane Smith",
    "age": 30,
    "email": "janesmith@example.com",
    "password": "password456"
  },
  {
    "name": "Bob Johnson",
    "age": 40,
    "email": "bobjohnson@example.com",
    "password": "password789"
  },
  {
    "name": "Alice Williams",
    "age": 35,
    "email": "alicewilliams@example.com",
    "password": "passwordabc"
  },
  {
    "name": "David Brown",
    "age": 28,
    "email": "davidbrown@example.com",
    "password": "passworddef"
  }
];

const uploadData = async () => {
  const db = firebase.db;
  const batch = db.batch();
  const collectionRef = db.collection('users');

  data.forEach((doc) => {
    const docRef = collectionRef.doc();
    batch.set(docRef, doc);
  });

  await batch.commit();

  console.log('Data uploaded successfully!');
};

uploadData().catch((error) => {
  console.error(error);
});

