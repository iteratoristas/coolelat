exports.up = function (knex) {
  return knex.schema.alterTable("quizzes", (table) => {
    table.integer("author");
    table
      .foreign("author")
      .references("user_id")
      .inTable("users")
      .onDelete("SET NULL");
  });
};

exports.down = function (knex) {
  return knex.schema.alterTable("quizzes", (table) => {
    table.dropForeign("author");
    table.dropColumn("author");
  });
};
