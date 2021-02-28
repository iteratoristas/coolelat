exports.up = function (knex) {
    return knex.schema.alterTable("quizzes", (table) => {
      table.boolean('published').defaultTo(true);
    });
  };
  
  exports.down = function (knex) {
    return knex.schema.alterTable("quizzes", (table) => {
      table.dropColumn("published");
    });
  };
  