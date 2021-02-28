import { formatQuestionAndAnswer } from "../helpers/formulaQuestionFunctions";

describe("formatQuestionAndAnswer function", () => {
  const question = {
    question_id: 101,
    quiz_id: 10,
    question:
      "What is the perimeter of a square with a side length of [length]",
    type: "FQ",
    answer: "[length] * 4",
    options: [{ variable: "[length]", min: 2, max: 10, decimal: 0 }],
  };

  test("should return an object containing answer and string", () => {
    expect(formatQuestionAndAnswer(question)).toEqual(
      expect.objectContaining({
        answer: expect.any(String),
        string: expect.any(String),
      })
    );
  });

  test("should return an object with string property which includes no square brackets", () => {
    expect(formatQuestionAndAnswer(question)).toEqual(
      expect.objectContaining({
        answer: expect.any(String),
        string: expect.not.stringMatching(/\[[a-z]+\]/gi)
      })
    );
  });


  test("should return an object with answer property which includes no square brackets", () => {
    expect(formatQuestionAndAnswer(question)).toEqual(
        expect.objectContaining({
          string: expect.any(String),
          answer: expect.not.stringMatching(/\[[a-z]+\]/gi)
        })
      );
  });
});
