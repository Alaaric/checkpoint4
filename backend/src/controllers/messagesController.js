const models = require("../models");

const browseMessages = (req, res) => {
  models.messages
    .findAll()
    .then(([rows]) => {
      res.send(rows);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const readMessage = (req, res) => {
  models.messages
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

const editMessage = (req, res) => {
  const Message = req.body;

  Message.id = parseInt(req.params.id, 10);

  models.messages
    .update(Message)
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

const addMessage = (req, res) => {
  const Message = req.body;

  models.messages
    .insert(Message)
    .then(([result]) => {
      console.info(result);
      res.sendStatus(201);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const destroyMessage = (req, res) => {
  models.messages
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
  browseMessages,
  readMessage,
  editMessage,
  addMessage,
  destroyMessage,
};
