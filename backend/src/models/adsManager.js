const AbstractManager = require("./AbstractManager");

class AdsManager extends AbstractManager {
  constructor() {
    super({ table: "ads" });
  }

  findAllWithUserInfo() {
    return this.database
      .query(`select a.id id, a.creation_date, a.description, a.name , a.age, a.photo, u.id author_id, u.email, u.firstname, u.lastname from  ${this.table} a
    INNER JOIN users_ads ua ON ua.ad_id = a.id 
    INNER JOIN users u ON u.id = ua.user_id`);
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

  insertJoinTable(userAd) {
    return this.database.query(
      `INSERT INTO users_ads (user_id, ad_id) VALUES (?, ?)`,
      [userAd.user_id, userAd.ad_id]
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
