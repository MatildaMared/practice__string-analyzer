import { StringAnalyzer } from "./stringAnalyzer";

describe("string analyzer", () => {
	it("should work properly", () => {
		let string = "ugknbfddgicrmopn";
		let expected = true;
		const analyzer = new StringAnalyzer();

		const actual = analyzer.analyze(string);
		expect(actual).toBe(expected);
	});

	it("should work properly", () => {
		let string = "aaa";
		let expected = true;
		const analyzer = new StringAnalyzer();

		const actual = analyzer.analyze(string);
		expect(actual).toBe(expected);
	});

	it("should work properly", () => {
		let string = "jchzalrnumimnmhp";
		let expected = false;
		const analyzer = new StringAnalyzer();

		const actual = analyzer.analyze(string);
		expect(actual).toBe(expected);
	});

	it("should work properly", () => {
		let string = "haegwjzuvuyypxyu";
		let expected = false;
		const analyzer = new StringAnalyzer();

		const actual = analyzer.analyze(string);
		expect(actual).toBe(expected);
	});

	it("should work properly", () => {
		let string = "dvszwmarrgswjxmb";
		let expected = false;
		const analyzer = new StringAnalyzer();

		const actual = analyzer.analyze(string);
		expect(actual).toBe(expected);
	});
});
