import { DoubleLetterRule } from "./doubleLetterRule";

describe("double letter rule", () => {
	// It contains at least one letter that appears twice in a row, like xx, abcdde (dd), or aabbccdd (aa, bb, cc, or dd).
	it("should apply if at least one letter appears twice in a row", () => {
		// arrange
		const string = "abcdde";
		const expected = true;
		const rule = new DoubleLetterRule();

		// act
		const actual = rule.applies(string);

		// assert
		expect(actual).toBe(expected);
	});

	it("should not apply if there are no letters that appears twice in a row", () => {
		const string = "jchzalrnumimnmhp";
		const expected = false;
		const rule = new DoubleLetterRule();

		const actual = rule.applies(string);

		expect(actual).toBe(expected);
	});
});
