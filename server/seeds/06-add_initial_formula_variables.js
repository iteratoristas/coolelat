exports.seed = function (knex) {
  return knex("formula_variables")
    .del()
    .then(function () {
      return knex("formula_variables").insert([
        {
          variable_id: 1,
          question_id: 101,
          variable: "[length]",
          min: 2,
          max: 10,
          decimal: 0,
        },
      ]);
    });
};
