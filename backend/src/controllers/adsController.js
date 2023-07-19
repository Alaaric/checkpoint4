const models = require("../models");

const browseAds = (req, res) => {
  models.ads
    .findAll()
    .then(([rows]) => {
      res.send(rows);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const readAd = (req, res) => {
  models.ads
    .find(req.params.id)
    .then(([rows]) => {
      if (rows[0] == null) {
        res.sendStatus(404);
      } else {
        res.send(rows[0]);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const editAd = (req, res) => {
  const Ad = req.body;

  Ad.id = parseInt(req.params.id, 10);

  models.ads
    .update(Ad)
    .then(([result]) => {
      if (result.affectedRows === 0) {
        res.sendStatus(404);
      } else {
        res.sendStatus(204);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const addAd = (req, res) => {
  const Ad = req.body;

  models.ads
    .insert(Ad)
    .then(([result]) => {
      console.info(result);
      res.sendStatus(201);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const destroyAd = (req, res) => {
  models.ads
    .delete(req.params.id)
    .then(([result]) => {
      if (result.affectedRows === 0) {
        res.sendStatus(404);
      } else {
        res.sendStatus(204);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

module.exports = {
  browseAds,
  readAd,
  editAd,
  addAd,
  destroyAd,
};