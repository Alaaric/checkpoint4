const AbstractManager = require("./AbstractManager");

class AdsManager extends AbstractManager {
  constructor() {
    super({ table: "ads" });
  }
  findAdsByUserId(userId) {
    return this.database.query(
      `SELECT * FROM ${this.table} a 
      INNER JOIN users_ads ua ON ua.ad_id = a.id
      WHERE ua.user_id = ?`,
      [userId]
    );
  }

  insert(ad) {
    return this.database.query(
      `INSERT INTO ${this.table} (description, name, age, photo) VALUES (?, ?, ?, ?)`,
      [ad.infos, ad.name, ad.age, ad.photo]
    );
  }

  update(ad) {
    return this.database.query(
      `UPDATE ${this.table} SET name = COALESCE(?, name), age = COALESCE(?, age), description = COALESCE(?, description), photo = COALESCE(?, photo) WHERE id = ?`,
      [ad.name, ad.age, ad.description, ad.photo, ad.id]
    );
  }
}

module.exports = AdsManager;
