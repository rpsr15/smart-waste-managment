const { usersRef } = require('../config/firebase.config');

module.exports = {
  createUser: (userData) => {
    return new Promise((resolve, reject) => {
      usersRef.push(userData)
        .then(() => {
          resolve();
        })
        .catch((error) => {
          reject(error);
        });
    });
  },

  checkExistingUser: (email) => {
    return new Promise((resolve, reject) => {
      usersRef.orderByChild('email').equalTo(email).once('value')
        .then((snapshot) => {
          resolve(snapshot.val() !== null);
        })
        .catch((error) => {
          reject(error);
        });
    });
  },

  getUserByEmail: (email) => {
    return new Promise((resolve, reject) => {
      usersRef.orderByChild('email').equalTo(email).once('value')
        .then((snapshot) => {
          const user = snapshot.val();
          const userId = Object.keys(user)[0];
          resolve(user[userId]);
        })
        .catch((error) => {
          reject(error);
        });
    });
  },
};
