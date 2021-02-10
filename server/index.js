const express = require("express");
const pg = require("pg");
const getResult = require("./helper/getResult");

require("dotenv").config();

const pool = new pg.Pool(JSON.parse(process.env.DB_CONNECTION_STRING));
const port = process.env.PORT;
const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

pool.connect((error, client) => {
  if (error) {
    console.log("Could not connect to database.");
    process.exit(1);
  }

  // Routes
  app.get("/categories", (req, res) => {
    return client.query(
      "SELECT * FROM categories INNER JOIN subcategories USING(category_id) ORDER BY categories.name",
      (error, result) => {
        if (error) {
          return res.status(500).json({ error: "Could not retrieve data." });
        }

        let results = getResult(result, 'subcategories', ['subcategory_id', 'subcategory'], 'category_id');
        return res.status(200).json(results);
      }
    );
  });

  app.listen(port, () => {
    console.log(`Server is listening on http://localhost:${port}`);
  });
});
