import { DoubleLetterRule } from "./../doubleLetterRule/doubleLetterRule";
import { InvalidLetterCombinationRule } from "./../invalidLetterCombinationRule/invalidLetterCombinationRule";
import { ThreeVowelsRule } from "./../threeVowelsRule/threeVowelsRule";

export class StringAnalyzer {
	rules = [
		new DoubleLetterRule(),
		new ThreeVowelsRule(),
		new InvalidLetterCombinationRule(),
	];

	analyze = (string: string) => {
		let result = true;

		this.rules.forEach((rule) => {
			if (!rule.applies(string)) {
				result = false;
			}
		});

		return result;
	};
}
