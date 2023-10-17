const firebase = require('firebase');

const { firebaseConfig } = require('../config/firebase.config');
const database = firebase.initializeApp(firebaseConfig).database();
const binRef = database.ref('binMetaData');
const readBinRef = database.ref('binReading');

module.exports = {
  getAllBins: () => {
    return new Promise((resolve, reject) => {
      binRef.once('value').then((snapshot) => {
        const data = snapshot.val();
        resolve(data);
      }).catch((error) => {
        reject(error);
      });
    });
  },

  getBinsByLocation: (area) => {
    return new Promise((resolve, reject) => {
      binRef.orderByChild('location_precinct').equalTo(area).once('value').then((snapshot) => {
        const data = snapshot.val();
        resolve(data);
      }).catch((error) => {
        reject(error);
      });
    });
  },

  getLatestData: () => {
    return new Promise((resolve, reject) => {
      readBinRef.once('value').then((snapshot) => {
        const data = snapshot.val();
        const latestData = data; 
        resolve(latestData);
      }).catch((error) => {
        reject(error);
      });
    });
  },

  pushBinData: (binData) => {
    return new Promise((resolve, reject) => {
      readBinRef.push(binData).then(() => {
        resolve();
      }).catch((error) => {
        reject(error);
      });
    });
  }
};
