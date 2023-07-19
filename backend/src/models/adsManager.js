const AbstractManager = require("./AbstractManager");

class AdsManager extends AbstractManager {
  constructor() {
    super({ table: "ads" });
  }

  insert(ad) {
    return this.database.query(
      `INSERT INTO ${this.table} (description, name, age, photo) VALUES (?, ?, ?, ?)`,
      [ad.infos, ad.name, ad.age, ad.photo]
    );
  }
}

module.exports = AdsManager;
