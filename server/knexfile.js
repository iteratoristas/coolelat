require("dotenv").config();

module.exports = {
  development: {
    client: "postgresql",
    connection: {
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: "coolelat",
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "knex_migrations",
    },
  },
};
