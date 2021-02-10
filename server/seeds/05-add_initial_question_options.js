exports.seed = function (knex) {
  return knex("question_options")
    .del()
    .then(function () {
      return knex("question_options").insert([
        { id: 1, question_id: 1, option: "990" },
        { id: 2, question_id: 1, option: "980" },
        { id: 3, question_id: 1, option: "991" },
        { id: 4, question_id: 1, option: "981" },

        { id: 5, question_id: 2, option: "470" },
        { id: 6, question_id: 2, option: "480" },
        { id: 7, question_id: 2, option: "471" },
        { id: 8, question_id: 2, option: "481" },

        { id: 9, question_id: 3, option: "889" },
        { id: 10, question_id: 3, option: "899" },
        { id: 11, question_id: 3, option: "898" },
        { id: 12, question_id: 3, option: "888" },

        { id: 13, question_id: 4, option: "9176" },
        { id: 14, question_id: 4, option: "9173" },
        { id: 15, question_id: 4, option: "9174" },
        { id: 16, question_id: 4, option: "9175" },

        { id: 17, question_id: 5, option: "6772" },
        { id: 18, question_id: 5, option: "6762" },
        { id: 19, question_id: 5, option: "6773" },
        { id: 20, question_id: 5, option: "6763" },

        { id: 21, question_id: 6, option: "9851" },
        { id: 22, question_id: 6, option: "9853" },
        { id: 23, question_id: 6, option: "9852" },
        { id: 24, question_id: 6, option: "9854" },

        { id: 25, question_id: 7, option: "4016" },
        { id: 26, question_id: 7, option: "4017" },
        { id: 27, question_id: 7, option: "4018" },
        { id: 28, question_id: 7, option: "4019" },

        { id: 29, question_id: 8, option: "3938" },
        { id: 30, question_id: 8, option: "3928" },
        { id: 31, question_id: 8, option: "3929" },
        { id: 32, question_id: 8, option: "3939" },

        { id: 33, question_id: 9, option: "8310" },
        { id: 34, question_id: 9, option: "8311" },
        { id: 35, question_id: 9, option: "8312" },
        { id: 36, question_id: 9, option: "8309" },

        { id: 37, question_id: 10, option: "9115" },
        { id: 38, question_id: 10, option: "9113" },
        { id: 39, question_id: 10, option: "9114" },
        { id: 40, question_id: 10, option: "9112" },

        { id: 41, question_id: 11, option: "1" },
        { id: 42, question_id: 11, option: "13" },
        { id: 43, question_id: 11, option: "6" },
        { id: 44, question_id: 11, option: "12" },

        { id: 45, question_id: 12, option: "6" },
        { id: 46, question_id: 12, option: "7" },
        { id: 47, question_id: 12, option: "8" },
        { id: 48, question_id: 12, option: "9" },

        { id: 49, question_id: 13, option: "1" },
        { id: 50, question_id: 13, option: "2" },
        { id: 51, question_id: 13, option: "3" },
        { id: 52, question_id: 13, option: "4" },

        { id: 53, question_id: 14, option: "4" },
        { id: 54, question_id: 14, option: "2" },
        { id: 55, question_id: 14, option: "1" },
        { id: 56, question_id: 14, option: "3" },

        { id: 57, question_id: 15, option: "11" },
        { id: 58, question_id: 15, option: "14" },
        { id: 59, question_id: 15, option: "13" },
        { id: 60, question_id: 15, option: "12" },

        { id: 61, question_id: 16, option: "4" },
        { id: 62, question_id: 16, option: "3" },
        { id: 63, question_id: 16, option: "2" },
        { id: 64, question_id: 16, option: "1" },

        { id: 65, question_id: 17, option: "6" },
        { id: 66, question_id: 17, option: "8" },
        { id: 67, question_id: 17, option: "7" },
        { id: 68, question_id: 17, option: "9" },

        { id: 69, question_id: 18, option: "8" },
        { id: 70, question_id: 18, option: "9" },
        { id: 71, question_id: 18, option: "6" },
        { id: 72, question_id: 18, option: "7" },

        { id: 73, question_id: 19, option: "10" },
        { id: 74, question_id: 19, option: "11" },
        { id: 75, question_id: 19, option: "12" },
        { id: 76, question_id: 19, option: "9" },

        { id: 77, question_id: 20, option: "6" },
        { id: 78, question_id: 20, option: "7" },
        { id: 79, question_id: 20, option: "8" },
        { id: 80, question_id: 20, option: "9" },

        { id: 81, question_id: 21, option: "8r1" },
        { id: 82, question_id: 21, option: "7r1" },
        { id: 83, question_id: 21, option: "8r2" },
        { id: 84, question_id: 21, option: "7r2" },

        { id: 85, question_id: 22, option: "3r3" },
        { id: 86, question_id: 22, option: "3r2" },
        { id: 87, question_id: 22, option: "2r3" },
        { id: 88, question_id: 22, option: "2r2" },

        { id: 89, question_id: 23, option: "3r1" },
        { id: 90, question_id: 23, option: "3r2" },
        { id: 91, question_id: 23, option: "2r2" },
        { id: 92, question_id: 23, option: "2r1" },

        { id: 93, question_id: 24, option: "15r3" },
        { id: 94, question_id: 24, option: "14r3" },
        { id: 95, question_id: 24, option: "13r3" },
        { id: 96, question_id: 24, option: "12r3" },

        { id: 97, question_id: 25, option: "23r3" },
        { id: 98, question_id: 25, option: "24r3" },
        { id: 99, question_id: 25, option: "25r3" },
        { id: 100, question_id: 25, option: "26r3" },

        { id: 101, question_id: 26, option: "13r2" },
        { id: 102, question_id: 26, option: "12r2" },
        { id: 103, question_id: 26, option: "11r2" },
        { id: 104, question_id: 26, option: "10r2" },

        { id: 105, question_id: 27, option: "2r3" },
        { id: 106, question_id: 27, option: "2r2" },
        { id: 107, question_id: 27, option: "3r3" },
        { id: 108, question_id: 27, option: "3r2" },

        { id: 109, question_id: 28, option: "39r2" },
        { id: 110, question_id: 28, option: "29r2" },
        { id: 111, question_id: 28, option: "39r1" },
        { id: 112, question_id: 28, option: "29r1" },

        { id: 113, question_id: 29, option: "3 4/5" },
        { id: 114, question_id: 29, option: "2 4/5" },
        { id: 115, question_id: 29, option: "3 2/5" },
        { id: 116, question_id: 29, option: "2 2/5" },

        { id: 117, question_id: 30, option: "29r1" },
        { id: 118, question_id: 30, option: "29r2" },
        { id: 119, question_id: 30, option: "28r1" },
        { id: 120, question_id: 30, option: "29r2" },

        { id: 121, question_id: 31, option: "1863" },
        { id: 122, question_id: 31, option: "243" },
        { id: 123, question_id: 31, option: "1872" },
        { id: 124, question_id: 31, option: "252" },

        { id: 125, question_id: 32, option: "3524" },
        { id: 126, question_id: 32, option: "354" },
        { id: 127, question_id: 32, option: "3224" },
        { id: 128, question_id: 32, option: "344" },

        { id: 129, question_id: 33, option: "152" },
        { id: 130, question_id: 33, option: "712" },
        { id: 131, question_id: 33, option: "252" },
        { id: 132, question_id: 33, option: "1412" },

        { id: 133, question_id: 34, option: "122" },
        { id: 134, question_id: 34, option: "1212" },
        { id: 135, question_id: 34, option: "132" },
        { id: 136, question_id: 34, option: "1312" },

        { id: 137, question_id: 35, option: "3224" },
        { id: 138, question_id: 35, option: "3324" },
        { id: 139, question_id: 35, option: "244" },
        { id: 140, question_id: 35, option: "344" },

        { id: 141, question_id: 36, option: "2745" },
        { id: 142, question_id: 36, option: "2845" },
        { id: 143, question_id: 36, option: "2645" },
        { id: 144, question_id: 36, option: "315" },

        { id: 145, question_id: 37, option: "168" },
        { id: 146, question_id: 37, option: "178" },
        { id: 147, question_id: 37, option: "170" },
        { id: 148, question_id: 37, option: "160" },

        { id: 149, question_id: 38, option: "816" },
        { id: 150, question_id: 38, option: "76" },
        { id: 151, question_id: 38, option: "96" },
        { id: 152, question_id: 38, option: "86" },

        { id: 153, question_id: 39, option: "812" },
        { id: 154, question_id: 39, option: "92" },
        { id: 155, question_id: 39, option: "212" },
        { id: 156, question_id: 39, option: "82" },

        { id: 157, question_id: 40, option: "5616" },
        { id: 158, question_id: 40, option: "576" },
        { id: 159, question_id: 40, option: "566" },
        { id: 160, question_id: 40, option: "4816" },

        { id: 161, question_id: 41, option: "2024" },
        { id: 162, question_id: 41, option: "18584" },
        { id: 163, question_id: 41, option: "19854" },
        { id: 164, question_id: 41, option: "2014" },

        { id: 165, question_id: 42, option: "1170" },
        { id: 166, question_id: 42, option: "9270" },
        { id: 167, question_id: 42, option: "9370" },
        { id: 168, question_id: 42, option: "1070" },

        { id: 169, question_id: 43, option: "17112" },
        { id: 170, question_id: 43, option: "18112" },
        { id: 171, question_id: 43, option: "2006" },
        { id: 172, question_id: 43, option: "2016" },

        { id: 173, question_id: 44, option: "9208" },
        { id: 174, question_id: 44, option: "9108" },
        { id: 175, question_id: 44, option: "9008" },
        { id: 176, question_id: 44, option: "1458" },

        { id: 177, question_id: 45, option: "7056" },
        { id: 178, question_id: 45, option: "8056" },
        { id: 179, question_id: 45, option: "6056" },
        { id: 180, question_id: 45, option: "67536" },

        { id: 181, question_id: 46, option: "21518" },
        { id: 182, question_id: 46, option: "3853" },
        { id: 183, question_id: 46, option: "2853" },
        { id: 184, question_id: 46, option: "20518" },

        { id: 185, question_id: 47, option: "4928" },
        { id: 186, question_id: 47, option: "6928" },
        { id: 187, question_id: 47, option: "5928" },
        { id: 188, question_id: 47, option: "798" },

        { id: 189, question_id: 48, option: "816" },
        { id: 190, question_id: 48, option: "15407" },
        { id: 191, question_id: 48, option: "15307" },
        { id: 192, question_id: 48, option: "15507" },

        { id: 193, question_id: 49, option: "36377" },
        { id: 194, question_id: 49, option: "36277" },
        { id: 195, question_id: 49, option: "3977" },
        { id: 196, question_id: 49, option: "3877" },

        { id: 197, question_id: 50, option: "9208" },
        { id: 198, question_id: 50, option: "9108" },
        { id: 199, question_id: 50, option: "9008" },
        { id: 200, question_id: 50, option: "9308" },

        { id: 201, question_id: 51, option: "426" },
        { id: 202, question_id: 51, option: "4260" },
        { id: 203, question_id: 51, option: "42600" },
        { id: 204, question_id: 51, option: "426000" },

        { id: 205, question_id: 52, option: "74" },
        { id: 206, question_id: 52, option: "740" },
        { id: 207, question_id: 52, option: "7400" },
        { id: 208, question_id: 52, option: "74000" },

        { id: 209, question_id: 53, option: "5469" },
        { id: 210, question_id: 53, option: "54690" },
        { id: 211, question_id: 53, option: "546900" },
        { id: 212, question_id: 53, option: "5469000" },

        { id: 213, question_id: 54, option: "87140" },
        { id: 214, question_id: 54, option: "871400" },
        { id: 215, question_id: 54, option: "8714000" },
        { id: 216, question_id: 54, option: "87140000" },

        { id: 217, question_id: 55, option: "4826" },
        { id: 218, question_id: 55, option: "48260" },
        { id: 219, question_id: 55, option: "482600" },
        { id: 220, question_id: 55, option: "4826000" },

        { id: 221, question_id: 56, option: "5844000" },
        { id: 222, question_id: 56, option: "584400" },
        { id: 223, question_id: 56, option: "58440" },
        { id: 224, question_id: 56, option: "5044000" },

        { id: 225, question_id: 57, option: "63020" },
        { id: 226, question_id: 57, option: "630200" },
        { id: 227, question_id: 57, option: "6302000" },
        { id: 228, question_id: 57, option: "63030" },

        { id: 229, question_id: 58, option: "57330" },
        { id: 230, question_id: 58, option: "573200" },
        { id: 231, question_id: 58, option: "573300" },
        { id: 232, question_id: 58, option: "57320" },

        { id: 233, question_id: 59, option: "112640" },
        { id: 234, question_id: 59, option: "1126400" },
        { id: 235, question_id: 59, option: "11264000" },
        { id: 236, question_id: 59, option: "112640000" },

        { id: 237, question_id: 60, option: "74586000" },
        { id: 238, question_id: 60, option: "745860" },
        { id: 239, question_id: 60, option: "7458600" },
        { id: 240, question_id: 60, option: "745860000" },

        { id: 241, question_id: 61, option: "716" },
        { id: 242, question_id: 61, option: "616" },
        { id: 243, question_id: 61, option: "816" },
        { id: 244, question_id: 61, option: "916" },

        { id: 245, question_id: 62, option: "40" },
        { id: 246, question_id: 62, option: "30" },
        { id: 247, question_id: 62, option: "10" },
        { id: 248, question_id: 62, option: "10" },

        { id: 249, question_id: 63, option: "500" },
        { id: 250, question_id: 63, option: "200" },
        { id: 251, question_id: 63, option: "300" },
        { id: 252, question_id: 63, option: "400" },

        { id: 253, question_id: 64, option: "220" },
        { id: 254, question_id: 64, option: "320" },
        { id: 255, question_id: 64, option: "310" },
        { id: 256, question_id: 64, option: "210" },

        { id: 257, question_id: 65, option: "38" },
        { id: 258, question_id: 65, option: "48" },
        { id: 259, question_id: 65, option: "58" },
        { id: 260, question_id: 65, option: "59" },

        { id: 261, question_id: 66, option: "426" },
        { id: 262, question_id: 66, option: "326" },
        { id: 263, question_id: 66, option: "226" },
        { id: 264, question_id: 66, option: "126" },

        { id: 265, question_id: 67, option: "315" },
        { id: 266, question_id: 67, option: "215" },
        { id: 267, question_id: 67, option: "115" },
        { id: 268, question_id: 67, option: "105" },

        { id: 269, question_id: 68, option: "816" },
        { id: 270, question_id: 68, option: "516" },
        { id: 271, question_id: 68, option: "616" },
        { id: 272, question_id: 68, option: "716" },

        { id: 273, question_id: 69, option: "310" },
        { id: 274, question_id: 69, option: "210" },
        { id: 275, question_id: 69, option: "110" },
        { id: 276, question_id: 69, option: "410" },

        { id: 277, question_id: 70, option: "47" },
        { id: 278, question_id: 70, option: "37" },
        { id: 279, question_id: 70, option: "48" },
        { id: 280, question_id: 70, option: "38" },

        { id: 281, question_id: 71, option: "3542" },
        { id: 282, question_id: 71, option: "3543" },
        { id: 283, question_id: 71, option: "3544" },
        { id: 284, question_id: 71, option: "3545" },

        { id: 285, question_id: 72, option: "558" },
        { id: 286, question_id: 72, option: "557" },
        { id: 287, question_id: 72, option: "547" },
        { id: 288, question_id: 72, option: "548" },

        { id: 289, question_id: 73, option: "120" },
        { id: 290, question_id: 73, option: "220" },
        { id: 291, question_id: 73, option: "130" },
        { id: 292, question_id: 73, option: "230" },

        { id: 293, question_id: 74, option: "6530" },
        { id: 294, question_id: 74, option: "6430" },
        { id: 295, question_id: 74, option: "6520" },
        { id: 296, question_id: 74, option: "6420" },

        { id: 297, question_id: 75, option: "6803" },
        { id: 298, question_id: 75, option: "6703" },
        { id: 299, question_id: 75, option: "5803" },
        { id: 300, question_id: 75, option: "5703" },

        { id: 301, question_id: 76, option: "631" },
        { id: 302, question_id: 76, option: "621" },
        { id: 303, question_id: 76, option: "531" },
        { id: 304, question_id: 76, option: "521" },

        { id: 305, question_id: 77, option: "1942" },
        { id: 306, question_id: 77, option: "1842" },
        { id: 307, question_id: 77, option: "1742" },
        { id: 308, question_id: 77, option: "1642" },

        { id: 309, question_id: 78, option: "206" },
        { id: 310, question_id: 78, option: "306" },
        { id: 311, question_id: 78, option: "106" },
        { id: 312, question_id: 78, option: "406" },

        { id: 313, question_id: 79, option: "131" },
        { id: 314, question_id: 79, option: "231" },
        { id: 315, question_id: 79, option: "121" },
        { id: 316, question_id: 79, option: "230" },

        { id: 317, question_id: 80, option: "3542" },
        { id: 318, question_id: 80, option: "3541" },
        { id: 319, question_id: 80, option: "3540" },
        { id: 320, question_id: 80, option: "3539" },

        { id: 321, question_id: 81, option: "Monday" },
        { id: 322, question_id: 81, option: "Friday" },
        { id: 323, question_id: 81, option: "Thursday" },
        { id: 324, question_id: 81, option: "Sunday" },

        { id: 325, question_id: 82, option: "Saturday" },
        { id: 326, question_id: 82, option: "Friday" },
        { id: 327, question_id: 82, option: "Wednesday" },
        { id: 328, question_id: 82, option: "Thursday" },

        { id: 329, question_id: 83, option: "February and January" },
        { id: 330, question_id: 83, option: "March and May" },
        { id: 331, question_id: 83, option: "April and March" },
        { id: 332, question_id: 83, option: "December and November" },

        { id: 333, question_id: 84, option: "September and December" },
        { id: 334, question_id: 84, option: "January and March" },
        { id: 335, question_id: 84, option: "April and July" },
        { id: 336, question_id: 84, option: "February and June" },

        { id: 337, question_id: 85, option: "Thursday" },
        { id: 338, question_id: 85, option: "Saturday" },
        { id: 339, question_id: 85, option: "Friday" },
        { id: 340, question_id: 85, option: "Monday" },

        { id: 341, question_id: 86, option: "120 days" },
        { id: 342, question_id: 86, option: "110 days" },
        { id: 343, question_id: 86, option: "130 days" },
        { id: 344, question_id: 86, option: "100 days" },

        { id: 345, question_id: 87, option: "9 weeks and 4 days" },
        { id: 346, question_id: 87, option: "9 weeks and 6 days" },
        { id: 347, question_id: 87, option: "9 weeks and 3 days" },
        { id: 348, question_id: 87, option: "10 weeks and 2 days" },

        { id: 349, question_id: 88, option: "Saturday" },
        { id: 350, question_id: 88, option: "Wednesday" },
        { id: 351, question_id: 88, option: "Monday" },
        { id: 352, question_id: 88, option: "Friday" },

        { id: 353, question_id: 89, option: "Thursday" },
        { id: 354, question_id: 89, option: "Friday" },
        { id: 355, question_id: 89, option: "Monday" },
        { id: 356, question_id: 89, option: "Wednesday" },

        { id: 357, question_id: 90, option: "24 days" },
        { id: 358, question_id: 90, option: "23 days" },
        { id: 359, question_id: 90, option: "25 days" },
        { id: 360, question_id: 90, option: "20 days" },

        { id: 361, question_id: 91, option: "a hexagon" },
        { id: 362, question_id: 91, option: "a heptagon" },
        { id: 363, question_id: 91, option: "a nonagon" },
        { id: 364, question_id: 91, option: "a decagon" },

        { id: 365, question_id: 92, option: "a decagon" },
        { id: 366, question_id: 92, option: "a hendecagon" },
        { id: 367, question_id: 92, option: "a dodecagon" },
        { id: 368, question_id: 92, option: "an icosagon" },

        { id: 369, question_id: 93, option: "8" },
        { id: 370, question_id: 93, option: "9" },
        { id: 371, question_id: 93, option: "6" },
        { id: 372, question_id: 93, option: "7" },

        { id: 373, question_id: 94, option: "a pentagon" },
        { id: 374, question_id: 94, option: "a hexagon" },
        { id: 375, question_id: 94, option: "a nonagon" },
        { id: 376, question_id: 94, option: "a decagon" },

        { id: 377, question_id: 95, option: "12" },
        { id: 378, question_id: 95, option: "10" },
        { id: 379, question_id: 95, option: "11" },
        { id: 380, question_id: 95, option: "9" },

        { id: 381, question_id: 96, option: "a heptagon" },
        { id: 382, question_id: 96, option: "a hencagon" },
        { id: 383, question_id: 96, option: "a hexagon" },
        { id: 384, question_id: 96, option: "an pentagon" },

        { id: 385, question_id: 97, option: "2 sides" },
        { id: 386, question_id: 97, option: "4 sides" },
        { id: 387, question_id: 97, option: "3 sides" },
        { id: 388, question_id: 97, option: "5 sides" },

        { id: 389, question_id: 98, option: "True" },
        { id: 390, question_id: 98, option: "False" },

        { id: 391, question_id: 99, option: "A square has 4 equal sides and 4 right angles."},
        { id: 392, question_id: 99, option: "A square has 4 equal sides." },
        { id: 393, question_id: 99, option: "A square has 4 right angles." },
        { id: 394, question_id: 99, option: "A square has 2 pairs of parallel sides."},

        { id: 395, question_id: 100, option: "only 2 equal sides" },
        { id: 396, question_id: 100, option: "all 3 sides equal" },
        { id: 397, question_id: 100, option: "no equal sides" },
        { id: 398, question_id: 100, option: "one right angle" },
      ]);
    });
};
