exports.up = function (knex) {
  return knex.schema.createTable("questions", function (table) {
    table.increments("question_id").primary();
    table.integer("quiz_id");
    table
      .foreign("quiz_id")
      .references("quiz_id")
      .inTable("quizzes")
      .onDelete("CASCADE");
    table.text("question").notNullable();;
    table.text("answer").notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("questions");
};