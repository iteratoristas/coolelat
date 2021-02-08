exports.up = function (knex) {
  return knex.schema.createTable("question_options", function (table) {
    table.increments("id");
    table.integer("question_id");
    table
      .foreign("question_id")
      .references("question_id")
      .inTable("questions")
      .onDelete("CASCADE");
    table.text("option");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("question_options");
};
