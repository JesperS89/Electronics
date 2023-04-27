import sqlite from "sqlite3";
export const db = new sqlite.Database("database.db");

const createQueries = [
  `
    CREATE TABLE IF NOT EXISTS accounts(
      ID INTEGER PRIMARY KEY AUTOINCREMENT,
      username TEXT,
      hashedPassword TEXT,
      CONSTRAINT uniqueUsername UNIQUE(username)
    )
  
  `,
];

createQueries.forEach((query) => {
  db.run(query, (err) => {
    if (err) {
      console.error(err.message);
    }
  });
});

export const registerUser = (username, hashedPassword, callback) => {
  const query = `
      INSERT INTO accounts (username, hashedPassword)
      VALUES (?, ?)
      `;

  const values = [username, hashedPassword];

  db.run(query, values, callback);
};

export const getAccountByUsername = function (username, callback) {
  const query = `
  SELECT * FROM accounts WHERE username = ?
  `;
  const values = [username];

  db.get(query, values, callback);
};
