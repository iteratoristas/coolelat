exports.seed = function (knex) {
  return knex("questions")
    .del()
    .then(function () {
      return knex("questions").insert([
        {
          question_id: 1,
          quiz_id: 1,
          question: "Add 862 and 128.",
          answer: "990",
        },
        {
          question_id: 2,
          quiz_id: 1,
          question: "Add 125 and 346.",
          answer: "471",
        },
        {
          question_id: 3,
          quiz_id: 1,
          question: "Add 678 and 211.",
          answer: "889",
        },
        {
          question_id: 4,
          quiz_id: 1,
          question: "Add 2517 and 6658.",
          answer: "471",
        },
        {
          question_id: 5,
          quiz_id: 1,
          question: "Add 3111 and 3651.",
          answer: "6762",
        },
        {
          question_id: 6,
          quiz_id: 1,
          question: "Add 8657 and 1195.",
          answer: "9852",
        },
        {
          question_id: 7,
          quiz_id: 1,
          question: "651 + 1001 + 2367 = ?",
          answer: "4019",
        },
        {
          question_id: 8,
          quiz_id: 1,
          question: "2543 + 128 + 1258 = ?",
          answer: "3929",
        },
        {
          question_id: 9,
          quiz_id: 1,
          question: "354 + 859 + 577 + 6541 = ?",
          answer: "8311",
        },
        {
          question_id: 10,
          quiz_id: 1,
          question: "584 + 1024 + 251 + 1694 + 5562 = ?",
          answer: "9115",
        },
        {
          question_id: 11,
          quiz_id: 2,
          question: "13 / 1",
          answer: "13",
        },
        {
          question_id: 12,
          quiz_id: 2,
          question: "36 / 6",
          answer: "6",
        },
        {
          question_id: 13,
          quiz_id: 2,
          question: "30 / 10 ",
          answer: "3",
        },
        {
          question_id: 14,
          quiz_id: 2,
          question: "27 / 9",
          answer: "3",
        },
        {
          question_id: 15,
          quiz_id: 2,
          question: "96 / 8",
          answer: "12",
        },
        {
          question_id: 16,
          quiz_id: 2,
          question: "28 / 7",
          answer: "4",
        },
        {
          question_id: 17,
          quiz_id: 2,
          question: "24 / 4",
          answer: "8",
        },
        {
          question_id: 18,
          quiz_id: 2,
          question: "18 / 2",
          answer: "9",
        },
        {
          question_id: 19,
          quiz_id: 2,
          question: "60 / 5",
          answer: "12",
        },
        {
          question_id: 20,
          quiz_id: 2,
          question: "56 / 7",
          answer: "8",
        },
        {
          question_id: 21,
          quiz_id: 3,
          question: "15 / 2 ",
          answer: "7r1",
        },
        {
          question_id: 22,
          quiz_id: 3,
          question: "13 / 5",
          answer: "2r3",
        },
        {
          question_id: 23,
          quiz_id: 3,
          question: "43 / 2 ",
          answer: "3r1",
        },
        {
          question_id: 24,
          quiz_id: 3,
          question: "48 / 5",
          answer: "15r3",
        },
        {
          question_id: 25,
          quiz_id: 3,
          question: "95 / 4",
          answer: "23r3",
        },
        {
          question_id: 26,
          quiz_id: 3,
          question: "46 / 4",
          answer: "11r2",
        },
        {
          question_id: 27,
          quiz_id: 3,
          question: "13 / 5",
          answer: "2r3",
        },
        {
          question_id: 28,
          quiz_id: 3,
          question: "88 / 3",
          answer: "29r1",
        },
        {
          question_id: 29,
          quiz_id: 3,
          question:
            "19 apples are shared equally among five people. How many apples do they get each?",
          answer: "3 4/5",
        },
        {
          question_id: 30,
          quiz_id: 3,
          question: "57 / 2",
          answer: "28r1",
        },
        {
          question_id: 31,
          quiz_id: 4,
          question: "27 x 9 ",
          answer: "243",
        },
        {
          question_id: 32,
          quiz_id: 4,
          question: "43 x 8",
          answer: "344",
        },
        {
          question_id: 33,
          quiz_id: 4,
          question: "76 x 2",
          answer: "152",
        },
        {
          question_id: 34,
          quiz_id: 4,
          question: "44 x 3",
          answer: "132",
        },
        {
          question_id: 35,
          quiz_id: 4,
          question: "86 x 4",
          answer: "6762",
        },
        {
          question_id: 36,
          quiz_id: 4,
          question: "35 x 9",
          answer: "315",
        },
        {
          question_id: 37,
          quiz_id: 4,
          question: "20 x 8",
          answer: "160",
        },
        {
          question_id: 38,
          quiz_id: 4,
          question: "48 x 2",
          answer: "96",
        },
        {
          question_id: 39,
          quiz_id: 4,
          question: "23 x 4",
          answer: "92",
        },
        {
          question_id: 40,
          quiz_id: 4,
          question: "72 x 8",
          answer: "576",
        },
        {
          question_id: 41,
          quiz_id: 5,
          question: "44 x 46 ",
          answer: "2024",
        },
        {
          question_id: 42,
          quiz_id: 5,
          question: "13 x 90",
          answer: "344",
        },
        {
          question_id: 43,
          quiz_id: 5,
          question: "36 x 56",
          answer: "2016",
        },
        {
          question_id: 44,
          quiz_id: 5,
          question: "72 x 19",
          answer: "9108",
        },
        {
          question_id: 45,
          quiz_id: 5,
          question: "84 x 84",
          answer: "7056",
        },
        {
          question_id: 46,
          quiz_id: 5,
          question: "46 x 53",
          answer: "2853",
        },
        {
          question_id: 47,
          quiz_id: 5,
          question: "14 x 57",
          answer: "798",
        },
        {
          question_id: 48,
          quiz_id: 5,
          question: "57 x 51",
          answer: "2907",
        },
        {
          question_id: 49,
          quiz_id: 5,
          question: "97 x 41",
          answer: "3977",
        },
        {
          question_id: 50,
          quiz_id: 5,
          question: "99 x 92",
          answer: "9108",
        },
        {
          question_id: 51,
          quiz_id: 6,
          question: "426 x 10",
          answer: "4260",
        },
        {
          question_id: 52,
          quiz_id: 6,
          question: "740 x 100",
          answer: "74000",
        },
        {
          question_id: 53,
          quiz_id: 6,
          question: "5469 x 10",
          answer: "54690",
        },
        {
          question_id: 54,
          quiz_id: 6,
          question: "8714 x 100",
          answer: "871400",
        },
        {
          question_id: 55,
          quiz_id: 6,
          question: "4826 x 1000",
          answer: "4826000",
        },
        {
          question_id: 56,
          quiz_id: 6,
          question: "5844 x 1000",
          answer: "5844000",
        },
        {
          question_id: 57,
          quiz_id: 6,
          question: "6302 x 100",
          answer: "630200",
        },
        {
          question_id: 58,
          quiz_id: 6,
          question: "5732 x 10",
          answer: "57320",
        },
        {
          question_id: 59,
          quiz_id: 6,
          question: "11264 x 1000",
          answer: "11264000",
        },
        {
          question_id: 60,
          quiz_id: 6,
          question: "74586 x 10",
          answer: "745860",
        },
        {
          question_id: 61,
          quiz_id: 7,
          question: "( 7 x 8 ) x 11",
          answer: "616",
        },
        {
          question_id: 62,
          quiz_id: 7,
          question: "( 5 × 4 ) × 2",
          answer: "40",
        },
        {
          question_id: 63,
          quiz_id: 7,
          question: "( 25 × 4 ) × 3 ",
          answer: "300",
        },
        {
          question_id: 64,
          quiz_id: 7,
          question: "( 6 x 5 ) x 7",
          answer: "210",
        },
        {
          question_id: 65,
          quiz_id: 7,
          question: "( 6 x 4 ) x 2",
          answer: "48",
        },
        {
          question_id: 66,
          quiz_id: 7,
          question: "( 7 x 3 ) x 4",
          answer: "126",
        },
        {
          question_id: 67,
          quiz_id: 7,
          question: "( 5 x 7 ) x 3",
          answer: "105",
        },
        {
          question_id: 68,
          quiz_id: 7,
          question: "7 x ( 8 x 11 )",
          answer: "616",
        },
        {
          question_id: 69,
          quiz_id: 7,
          question: "( 7 x 5 ) x 6",
          answer: "210",
        },
        {
          question_id: 70,
          quiz_id: 7,
          question: "( 8 x 3 ) x 2",
          answer: "48",
        },
        {
          question_id: 71,
          quiz_id: 8,
          question: "Calculate 9999 – 6457 ",
          answer: "3542",
        },
        {
          question_id: 72,
          quiz_id: 8,
          question: "Calculate 2519 – 1972 ",
          answer: "547",
        },
        {
          question_id: 73,
          quiz_id: 8,
          question: "7269 – 7149 ",
          answer: "120",
        },
        {
          question_id: 74,
          quiz_id: 8,
          question: "6984 – 554 ",
          answer: "6430",
        },
        {
          question_id: 75,
          quiz_id: 8,
          question: "8249 – 2546 ",
          answer: "5703",
        },
        {
          question_id: 76,
          quiz_id: 8,
          question:
            "Jessica has 1135 roses. 604 roses are red and the rest are pink. How many pink roses does she have?",
          answer: "531",
        },
        {
          question_id: 77,
          quiz_id: 8,
          question:
            "James and Danielle donated 2300 to an organization. Danielle donated 658. How much did James donate?",
          answer: "1642",
        },
        {
          question_id: 78,
          quiz_id: 8,
          question:
            "There are 967 tables in a hall, 761 chairs were occupied. How many tables were not occupied?",
          answer: "206",
        },
        {
          question_id: 79,
          quiz_id: 8,
          question:
            "Jude saved $184. He saved $63 more than Marco. How much did Marco saved?",
          answer: "121",
        },
        {
          question_id: 80,
          quiz_id: 8,
          question:
            "Richard had 1987 old clothes and sold 1004. How many are left?",
          answer: "3542",
        },
        {
          question_id: 81,
          quiz_id: 9,
          question: "Which day is five days after Saturday?",
          answer: "Thursday",
        },
        {
          question_id: 82,
          quiz_id: 9,
          question: "Which day is four days before Sunday?",
          answer: "Wednesday",
        },
        {
          question_id: 83,
          quiz_id: 9,
          question:
            "Which of the following pairs of months have exactly the same number of days?",
          answer: "March and May",
        },
        {
          question_id: 84,
          quiz_id: 9,
          question:
            "Which of the following pairs of months have exactly the same number of days?",
          answer: "January and March",
        },
        {
          question_id: 85,
          quiz_id: 9,
          question: "What day is seventeen days after Tuesday?",
          answer: "Friday",
        },
        {
          question_id: 86,
          quiz_id: 9,
          question: "Approximately how many days are there in four months?",
          answer: "120 days",
        },
        {
          question_id: 87,
          quiz_id: 9,
          question:
            "How many weeks and days are there from 25th October to 28th December inclusive?",
          answer: "9 weeks and 2 days",
        },
        {
          question_id: 88,
          quiz_id: 9,
          question: "What day is twenty days before Thursday?",
          answer: "Friday",
        },
        {
          question_id: 89,
          quiz_id: 9,
          question: "Which day is five days after Saturday?",
          answer: "Thursday",
        },
        {
          question_id: 90,
          quiz_id: 9,
          question: "Sean started his holiday on 23rd June. He finished his holiday on 17th July. How many days was that?",
          answer: "24 days",
        },
        {
          question_id: 91,
          quiz_id: 10,
          question: "A nine-sided polygon is called:",
          answer: "a nonagon",
        },
        {
          question_id: 92,
          quiz_id: 10,
          question: "What do we call a twelve-sided polygon?",
          answer: "a dodecagon",
        },
        {
          question_id: 93,
          quiz_id: 10,
          question: "How many sides does a heptagon have?",
          answer: "7",
        },
        {
          question_id: 94,
          quiz_id: 10,
          question: "A five-sided polygon is called:",
          answer: "a pentagon",
        },
        {
          question_id: 95,
          quiz_id: 10,
          question: "How many sides does a dodecagon have?",
          answer: "12",
        },
        {
          question_id: 96,
          quiz_id: 10,
          question: "What do we call a six-sided polygon?",
          answer: "a hexagon",
        },
        {
          question_id: 97,
          quiz_id: 10,
          question: "A triangle is a closed planar shape with:",
          answer: "3 sides",
        },
        {
          question_id: 98,
          quiz_id: 10,
          question: "Two parallel lines intersect.",
          answer: "False",
        },
        {
          question_id: 99,
          quiz_id: 10,
          question: "Which of the statements below best describes a square?",
          answer: "A square has 4 equal sides and 4 right angles.",
        },
        {
          question_id: 100,
          quiz_id: 10,
          question: "An equilateral triangle has:",
          answer: "all 3 sides equal",
        },
        {
          question_id: 101,
          quiz_id: 10,
          question: "What is the perimeter of a square with a side length of [length]",
          type: "FQ",
          answer: "[length] * 4"
        },
      ]);
    });
};