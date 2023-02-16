import { Rule } from "Rule/Rule";

export class InvalidLetterCombinationRule implements Rule {
	// It does not contain the strings ab, cd, pq, or xy, even if they are part of one of the other requirements.
	applies = (string: string) => {
		const invalidWordCombinations = ["ab", "cd", "pq", "xy"];
		let result = true;

		invalidWordCombinations.forEach((invalidCombination) => {
			if (string.includes(invalidCombination)) {
				result = false;
			}
		});

		return result;
	};
}
