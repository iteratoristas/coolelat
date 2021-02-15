const express = require("express");
const pg = require("pg");
const cors = require("cors");
const getResult = require("./helper/getResult");

require("dotenv").config();

const pool = new pg.Pool(JSON.parse(process.env.DB_CONNECTION_STRING));
const port = process.env.PORT;
const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({origin: "http://localhost:3000"}));

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

  app.get("/categories/:name", (req, res) => {
    const name = req.params.name.replace('-', ' ').split(' ').map((value) => value[0].toUpperCase() + value.substring(1))[0];

    return client.query(
      "SELECT * FROM categories INNER JOIN subcategories USING(category_id) WHERE name = $1", [name],
      (error, result) => {
        if (error) {
          return res.status(500).json({ error: "Could not retrieve data." });
        }

        let results = getResult(result, 'subcategories', ['subcategory_id', 'subcategory'], 'category_id');
        return res.status(200).json(results);
      }
    );
  });
  app.get("/subcategories", (req, res) => {
    return client.query(
      "SELECT * FROM subcategories INNER JOIN quizzes USING(subcategory_id)",
      (error, result) => {
        if (error) {
          return res.status(500).json({ error: "Could not retrieve data." });
        }

        let results = getResult(result, 'quizzes', ['quiz_id', 'quiz_name'], 'subcategory');
        return res.status(200).json(results);
      }
    );
  });

  app.get("/quizzes", (req, res) => {
    return client.query(
      "SELECT * FROM subcategories INNER JOIN quizzes USING(subcategory_id)",
      (error, result) => {
        if (error) {
          return res.status(500).json({  error: "Could not retrieve data."  });
        }

        return res.status(200).json(result.rows);
      }
    );
  });

  app.get("/quiz/:id", (req, res) => {
    return client.query(
      "SELECT * FROM quizzes INNER JOIN questions USING(quiz_id) INNER JOIN question_options USING(question_id) WHERE quiz_id = $1",
      [req.params.id],
      (error, result) => {
        if (error) {
          return res.status(500).json({ error: "Could not retrieve data." });
        }

        let results = getResult(result, 'options', ['option', 'id'], 'question_id');
        return res.status(200).json(results);
      }
    );
  });

  app.listen(port, () => {
    console.log(`Server is listening on http://localhost:${port}`);
  });
});
