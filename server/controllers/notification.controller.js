const { notificationModel } = require('../models/notification.model.js');

exports.getNotifications = (req, res) => {
  notificationModel.getNotifications().then((data) => {
    res.json(data);
  });
};

exports.readNotifications = (req, res) => {
  const id = req.body.id;
  notificationModel.markNotificationAsRead(id).then(() => {
    res.status(200).json({ message: 'Notification marked as read', result: true });
  });
};

exports.deleteNotifications = (req, res) => {
  const id = req.body.id;
  notificationModel.deleteNotification(id).then(() => {
    res.status(200).json({ message: 'Notification deleted', result: true });
  });
};

exports.pushNotificationUser = (req, res) => {
  const userData = req.body;
  notificationModel.pushNotificationUser(userData).then(() => {
    res.status(200).json({ message: 'Notification user data successfully pushed', result: true });
  });
};
