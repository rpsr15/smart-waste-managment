const express = require('express');
const router = express.Router();

const {
  getAllBins,
  getLatestData,
  pushBinData,
} = require('../controllers/bin.controller');

const {
  signUp,
  login,
  updateProfile,
} = require('../controllers/user.controller');

const {
  getNotifications,
  readNotifications,
  deleteNotifications,
  pushNotificationUser,
} = require('../controllers/notification.controller');


router.get('/bins', getAllBins);
router.get('/latest-data', getLatestData);
router.post('/push-bin-data', pushBinData);

router.post('/signup', signUp);
router.post('/login', login);
router.post('/update-profile', updateProfile);

router.get('/notifications', getNotifications);
router.post('/read-notifications', readNotifications);
router.post('/delete-notifications', deleteNotifications);
router.post('/push-notification-user', pushNotificationUser);

module.exports = router;
