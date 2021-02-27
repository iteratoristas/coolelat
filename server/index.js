const express = require("express");
const pg = require("pg");
const cors = require("cors");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const getResult = require("./helper/getResult");
const validation = require("./helper/validation");
const formatPayload = require("./helper/formatPayload");

require("dotenv").config();

const pool = new pg.Pool(JSON.parse(process.env.DB_CONNECTION_STRING));
const port = process.env.PORT;
const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({origin: "http://localhost:3000"}));

const errorObject = (res, code = 500, message = "Something went wrong") => res.status(code).json({ success: false, message });

pool.connect((error, client) => {
  if (error) {
    console.log("Could not connect to database.");
    process.exit(1);
  }

  // Routes
  app.post("/signup", (req, res) => {
    const { firstName, lastName, email, password, type } = req.body;

    // server side validation
    if (validation.isInvalid(firstName) ||validation.isInvalid(lastName) || validation.isInvalid(email) || validation.isInvalidType(type) || validation.isInvalidPassword(password)) {
      return errorObject(res, 400, "Invalid input");
    }

    // hash password
    return bcrypt.hash(password, Number(process.env.SALT), (hashError, hashedPassword) => {
      if (hashError) return errorObject(res);

      // check for email duplicates in database
      return client.query(
        'SELECT email FROM users WHERE email = $1',
        [email],
        (error, duplicate) => {
          if (error || duplicate.rows.length !== 0) return errorObject(res, 409, "Email in use.");

          return client.query(
            'INSERT INTO users VALUES (DEFAULT, $1, $2, $3, $4, $5) RETURNING *',
            [firstName, lastName, email, hashedPassword, type],
            (dbError, result) => {
              if (dbError) return errorObject(res);

              const user = formatPayload(result.rows[0]);
              return jwt.sign(user, process.env.SECRET_KEY, {expiresIn: '15m'}, (error, token) => {
                if (error) return errorObject(res);
                return res.status(200).json({success: true, token });
              });
            }
          );
        },
      );
    });

  });

  app.post("/login", (req, res) => {
    const {email, password} = req.body;

    return client.query('SELECT * FROM users WHERE email = $1', [email], (error, result) => {
      if (error) return errorObject(res);
      if (result.rows.length === 0) return errorObject(res, 401, "No user found");

      const hashedPassword = result.rows[0]['password'];
      return bcrypt.compare(password.toString(), hashedPassword, (compareError, same) => {
        if (compareError || !same) return errorObject(res, 401, "No user found");

        // TODO: extract repetitive code in signup
        const user = formatPayload(result.rows[0]);
        return jwt.sign(user, process.env.SECRET_KEY, {expiresIn: '3h'}, (jwtError, token) => {
          if (jwtError) return errorObject(res);
          return res.status(200).json({success: true, token });
        });
      });
    });
  });

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
      "SELECT * FROM quizzes INNER JOIN subcategories USING(subcategory_id) INNER JOIN questions USING(quiz_id) LEFT JOIN question_options USING(question_id) LEFT JOIN formula_variables USING(question_id) ",
      (error, result) => {
        if (error) {
          return res.status(500).json({  error: "Could not retrieve data."  });
        }

        let results = getResult(result, 'options', ['option', 'id', 'variable', 'min', 'max', 'decimal'], 'question_id');
        return res.status(200).json(results);
      }
    );
  });

  app.get("/quiz/:id", (req, res) => {
    return client.query(
      "SELECT * FROM quizzes INNER JOIN questions USING(quiz_id) LEFT JOIN question_options USING(question_id) LEFT JOIN formula_variables USING(question_id) WHERE quiz_id = $1",
      [req.params.id],
      (error, result) => {
        if (error) {
          return res.status(500).json({ error: "Could not retrieve data." });
        }

        let results = getResult(result, 'options', ['option', 'id', 'variable', 'min', 'max', 'decimal', 'variable_id'], 'question_id');
        return res.status(200).json(results);
      }
    );
  });

  app.listen(port, () => {
    console.log(`Server is listening on http://localhost:${port}`);
  });
});
