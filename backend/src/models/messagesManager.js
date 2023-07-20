const AbstractManager = require("./AbstractManager");

class MessagesManager extends AbstractManager {
  constructor() {
    super({ table: "messages" });
  }

  findMessageForOneUserById(userId) {
    return this.database.query(
      `SELECT m.id, DATE_FORMAT(m.creation_date, "%d/%m/%Y") date, m.content, m.sender_id, u.email, u.firstname, u.lastname FROM ${this.table} m
      INNER JOIN users u ON u.id = m.sender_id
      WHERE reveiver_id = ? `,
      [userId]
    );
  }
}

module.exports = MessagesManager;
