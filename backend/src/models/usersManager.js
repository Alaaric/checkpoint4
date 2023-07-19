const AbstractManager = require("./AbstractManager");

class UsersManager extends AbstractManager {
  constructor() {
    super({ table: "users" });
  }

  selectByEmail(email) {
    return this.database.query(
      `SELECT * FROM ${this.table}
      WHERE email = ?`,
      [email]
    );
  }

  insert(user) {
    return this.database.query(
      `INSERT INTO ${this.table} (firstname, lastname, email, password) VALUES (?, ?, ?, ?)`,
      [user.firstname, user.lastname, user.email, user.hashedpassword]
    );
  }
}

module.exports = UsersManager;
