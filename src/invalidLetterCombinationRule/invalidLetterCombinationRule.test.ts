import { InvalidLetterCombinationRule } from "./invalidLetterCombinationRule";

describe("invalid letter combination rule", () => {
	// It does not contain the strings ab, cd, pq, or xy, even if they are part of one of the other requirements.
	it("applies if the string does not contain any of the invalid letter combinations", () => {
		const string = "ugknbfddgicrmopn";
		const expected = true;
		const rule = new InvalidLetterCombinationRule();

		const actual = rule.applies(string);

		expect(actual).toBe(expected);
	});

	it("does not apply if the string contain any of the invalid letter combinations", () => {
		const string = "haegwjzuvuyypxyu";
		const expected = false;
		const rule = new InvalidLetterCombinationRule();

		const actual = rule.applies(string);

		expect(actual).toBe(expected);
	});
});
