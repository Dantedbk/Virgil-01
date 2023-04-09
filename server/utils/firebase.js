const admin = require("firebase-admin");
const firebaseConfig = require("../config/firebaseConfig");
const serviceAccount = require("../config/serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: firebaseConfig.databaseURL
});

const db = admin.firestore();

module.exports = {
  db,
};
