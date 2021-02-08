exports.up = function (knex) {
  return knex.schema.createTable("categories", function (table) {
    table.increments("category_id").primary();
    table.text("name").notNullable();
    table.text("description").notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("categories");
};
