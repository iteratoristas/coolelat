exports.seed = function (knex) {
  return knex("subcategories")
    .del()
    .then(function () {
      return knex("subcategories").insert([
        {subcategory_id: 1, category_id: 1, icon: "", subcategory: "Addition"},
        {subcategory_id: 2, category_id: 1, icon: "", subcategory: "Division"},
        {subcategory_id: 3, category_id: 1, icon: "", subcategory: "Multiplication"},
        {subcategory_id: 4, category_id: 1, icon: "", subcategory: "Subtraction"},
        {subcategory_id: 5, category_id: 1, icon: "", subcategory: "General Arithmetics"},
        {subcategory_id: 6, category_id: 4, icon: "", subcategory: "Polygons"},
        {subcategory_id: 7, category_id: 6, icon: "", subcategory: "Time"},
      ]);
    });
};
