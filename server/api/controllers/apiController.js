const { db } = require('../../utils/firebase');

const getAPIData = async (req, res) => {
  try {
    const usersRef = db.collection('users');
    const snapshot = await usersRef.get();

    if (snapshot.empty) {
      console.log('No users found in Firebase');
      return res.status(404).json({ error: 'No users found' });
    }

    const data = [];
    snapshot.forEach((doc) => {
      data.push(doc.data());
    });

    console.log('Data from Firebase:', data);
    return res.status(200).json(data);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = { getAPIData };
