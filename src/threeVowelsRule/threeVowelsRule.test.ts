import { ThreeVowelsRule } from "./threeVowelsRule";

describe("Three vowels rule", () => {
  it("should apply if the string contains three vowels", () => {
    // arrange
    const string = "aei";
    const expected = true;
    const rule = new ThreeVowelsRule();

    // act
    const actual = rule.applies(string);

    // assert
    expect(actual).toBe(expected);
  })

  it("should not apply if the string does not contain three vowels", () => {
    const string = "dvszwmarrgswjxmb";
    const expected = false;
    const rule = new ThreeVowelsRule();

    const actual = rule.applies(string);

    expect(actual).toBe(expected);
  })
})