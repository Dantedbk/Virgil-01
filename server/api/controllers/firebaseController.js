const { initializeApp } = require('firebase/app');
const { getDatabase, ref, push, onValue, update, remove } = require('firebase/database');
const { firebaseConfig } = require('../config/firebaseConfig');

initializeApp(firebaseConfig);

const create = async (req, res) => {
  try {
    const { name, email } = req.body;

    const usersRef = ref(getDatabase(), 'users');
    const newUserRef = push(usersRef);
    await update(newUserRef, {
      name,
      email
    });

    return res.status(201).json({ message: 'User created successfully.' });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: 'Something went wrong.' });
  }
};

const read = async (req, res) => {
  try {
    const usersRef = ref(getDatabase(), 'users');
    const usersSnapshot = await onValue(usersRef, snapshot => {
      const usersData = snapshot.val();
      console.log('Data:', usersData);
      return res.status(200).json(usersData);
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: 'Something went wrong.' });
  }
};

const update = async (req, res) => {
  try {
    const { id, name, email } = req.body;

    const userRef = ref(getDatabase(), `users/${id}`);
    await update(userRef, {
      name,
      email
    });

    return res.status(200).json({ message: 'User updated successfully.' });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: 'Something went wrong.' });
  }
};

const del = async (req, res) => {
  try {
    const { id } = req.params;

    const userRef = ref(getDatabase(), `users/${id}`);
    await remove(userRef);

    return res.status(200).json({ message: 'User deleted successfully.' });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: 'Something went wrong.' });
  }
};

module.exports = { create, read, update, del };
