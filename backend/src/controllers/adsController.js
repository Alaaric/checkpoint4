const models = require("../models");

const browseAds = (req, res) => {
  models.ads
    .findAllWithUserInfo()
    .then(([rows]) => {
      res.send(rows);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const browseUsersAds = (req, res) => {
  models.ads
    .findAdsByUserId(req.params.id)
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
  const Ad = req.body.updatedAdInfos;
  Ad.photo = req.body.photo;
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
      res.status(201).json([result]);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const addUserAd = (req, res) => {
  const UserAd = req.body;

  models.ads
    .insertJoinTable(UserAd)
    .then(([result]) => {
      console.info(result);
      res.status(201);
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
  browseUsersAds,
  readAd,
  editAd,
  addAd,
  addUserAd,
  destroyAd,
};
