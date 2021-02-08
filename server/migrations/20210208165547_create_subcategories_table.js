exports.up = function (knex) {
  return knex.schema.createTable("subcategories", function (table) {
    table.increments("subcategory_id").primary();
    table.integer("category_id");
    table
      .foreign("category_id")
      .references("category_id")
      .inTable("categories")
      .onDelete('CASCADE');
    table.text("subcategory").notNullable();
    table.text("icon").notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("subcategories");
};
