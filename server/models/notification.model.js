const firebase = require('firebase');

const { firebaseConfig } = require('../config/firebase.config');
const database = firebase.initializeApp(firebaseConfig).database();
const notificationsRef = database.ref('notifications');
const notificationUserRef = database.ref('notificationUser');

module.exports = {
  getNotifications: () => {
    return new Promise((resolve, reject) => {
      notificationsRef.once('value').then((snapshot) => {
        const data = snapshot.val();
        resolve(data);
      }).catch((error) => {
        reject(error);
      });
    });
  },

  markNotificationAsRead: (id) => {
    return new Promise((resolve, reject) => {
      notificationsRef.child(id).update({ status: 'read' }).then(() => {
        resolve();
      }).catch((error) => {
        reject(error);
      });
    });
  },

  deleteNotification: (id) => {
    return new Promise((resolve, reject) => {
      notificationsRef.child(id).remove().then(() => {
        resolve();
      }).catch((error) => {
        reject(error);
      });
    });
  },

  pushNotificationUser: (userData) => {
    return new Promise((resolve, reject) => {
      notificationUserRef.push(userData).then(() => {
        resolve();
      }).catch((error) => {
        reject(error);
      });
    });
  },
};
