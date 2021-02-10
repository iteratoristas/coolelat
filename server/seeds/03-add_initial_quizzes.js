
exports.seed = function(knex) {
  return knex('quizzes').del()
    .then(function () {
      return knex('quizzes').insert([
        {quiz_id: 1, subcategory_id: 1, quiz_name: "Addition 101"}, //addition
        {quiz_id: 2, subcategory_id: 2, quiz_name: "Division 101"}, //division
        {quiz_id: 3, subcategory_id: 2, quiz_name: "Finding the Remainder"}, //remainder
        {quiz_id: 4, subcategory_id: 3, quiz_name: "Multiplication 101"}, //twobyone
        {quiz_id: 5, subcategory_id: 3, quiz_name: "Multiplication of Two Digit Numbers"}, //twobytwo
        {quiz_id: 6, subcategory_id: 3, quiz_name: "Multiplication by 10s"}, //zeros
        {quiz_id: 7, subcategory_id: 3, quiz_name: "Associative Multiplication"}, //associative
        {quiz_id: 8, subcategory_id: 4, quiz_name: "Subtraction 101"}, //subtraction
        {quiz_id: 9, subcategory_id: 7, quiz_name: "Getting Tricky with Time"}, //time
        {quiz_id: 10, subcategory_id: 4, quiz_name: "Polygons 101"}, //planegeometry
      ]);
    });
};
