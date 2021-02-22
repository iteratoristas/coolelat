import { parsePath, unparsePath } from "../helpers/pathFunctions";

describe("parsePath function", () => {
  test("should correctly parse paths", () => {
    expect(parsePath("Arithmetics with Friends")).toEqual(
      "arithmetics-with-friends"
    );
  });

  test("should correctly parse paths untrimmed strings", () => {
    expect(parsePath("         Arithmetics with Friends         ")).toEqual(
      "arithmetics-with-friends"
    );
  });

  test("should correctly parse paths empty strings", () => {
    expect(parsePath("            ")).toEqual("");
  });
});

describe("unparsePath function", () => {
  test("should correctly unparse paths", () => {
    expect(unparsePath("arithmetics-with-friends")).toEqual(
      "Arithmetics With Friends"
    );
  });

  test("should correctly unparse paths untrimmed string", () => {
    expect(unparsePath("  arithmetics-with-friends   ")).toEqual(
      "Arithmetics With Friends"
    );
  });

  test("should correctly unparse paths empty strings", () => {
    expect(unparsePath("            ")).toEqual("");
  });
});
