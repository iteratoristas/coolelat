exports.seed = function (knex) {
  return knex("categories")
    .del()
    .then(function () {
      return knex("categories").insert([
        {category_id: 1, name: "Arithmetic", description: ""},
        {category_id: 2, name: "Data", description: ""},
        {category_id: 3, name: "Fractions", description: ""},
        {category_id: 4, name: "Plane Geometry", description: ""},
        {category_id: 5, name: "Solid Geometry", description: ""},
        {category_id: 6, name: "Word Problems", description: ""},
      ]);
    });
};
