import express from "express";
import pg from "pg";
import dotenv from "dotenv";

dotenv.config();

const pool = new pg.Pool();
const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

pool.connect((error, client) => {
  if (error) {
    console.log("Could not connect to database.");
    process.exit(1);
  }

  app.get("/", (req, res) => {});

  app.listen(port, () => {
    console.log(`Server is listening on http://localhost:${port}`);
  });
});
