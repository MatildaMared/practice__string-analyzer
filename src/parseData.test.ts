import { data } from "./data.json";
import { parseData } from "./parseData";

describe("dataParser", () => {
	it("should return an array of strings", () => {
		// arrange
		const expected = data;

		// act
		const actual = parseData();

		// assert
		expect(actual).toEqual(expected);
	});
});
