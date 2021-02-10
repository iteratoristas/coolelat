
exports.up = function(knex) {
  return knex.schema.alterTable('quizzes', function (table) {
    table.text("quiz_name").notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.alterTable('quizzes', function (table) {
    table.dropColumn("quiz_name");
  });
};
