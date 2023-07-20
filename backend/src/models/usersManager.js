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
  update(user) {
    return this.database.query(
      `UPDATE ${this.table} SET firstname = COALESCE(?, firstname), lastname = COALESCE(?, lastname), email = COALESCE(?, email), password = COALESCE(?, password) WHERE id = ?`,
      [user.firstname, user.lastname, user.email, user.password, user.id]
    );
  }
}

module.exports = UsersManager;
