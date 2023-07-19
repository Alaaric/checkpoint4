const AbstractManager = require("./AbstractManager");

class AdsManager extends AbstractManager {
  constructor() {
    super({ table: "ads" });
  }
}

module.exports = AdsManager;
