const { binModel } = require('../models/bin.model.js');

exports.getAllBins = (req, res) => {
  const { area } = req.query;

  if (!area) {
    binModel.getAllBins().then((data) => {
      res.json(data);
    });
  } else {
    binModel.getBinsByLocation(area).then((data) => {
      res.json(data);
    });
  }
};

exports.getLatestData = (req, res) => {
  binModel.getLatestData().then((data) => {
    res.json(data);
  });
};

exports.pushBinData = (req, res) => {
  const binData = req.body;
  binModel.pushBinData(binData).then(() => {
    res.status(200).json({ message: 'Bin data successfully pushed', result: true });
  });
};
