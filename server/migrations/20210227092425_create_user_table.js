exports.up = function (knex) {
  return knex.schema.createTable("users", (table) => {
    table.increments("user_id");
    table.text("first_name").notNullable();
    table.text("last_name").notNullable();
    table.text("email").notNullable();
    table.unique("email");
    table.text("password").notNullable();
    table.enu('type', ['student', 'teacher']).defaultTo('student').notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("users");
};
