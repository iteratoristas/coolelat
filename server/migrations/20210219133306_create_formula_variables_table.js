
exports.up = function(knex) {
  return knex.schema.createTable("formula_variables", function (table) {
    table.increments("variable_id").primary();
    table.integer("question_id");
    table
      .foreign("question_id")
      .references("question_id")
      .inTable("questions")
      .onDelete("CASCADE");
    table.text("variable").notNullable();;
    table.integer("min").notNullable();
    table.integer("max").notNullable();
    table.integer("decimal").notNullable();
  })
};

exports.down = function(knex) {
    return knex.schema.dropTable("formula_variables");
};
