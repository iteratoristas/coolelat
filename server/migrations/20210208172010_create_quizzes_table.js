exports.up = function (knex) {
  return knex.schema.createTable("quizzes", function (table) {
    table.increments("quiz_id").primary();
    table.integer("subcategory_id");
    table
      .foreign("subcategory_id")
      .references("subcategory_id")
      .inTable("subcategories")
      .onDelete("CASCADE");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("quizzes");
};