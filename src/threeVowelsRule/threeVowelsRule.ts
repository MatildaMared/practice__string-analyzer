import { Rule } from "Rule/Rule";

export class ThreeVowelsRule implements Rule {
  // applies if string contains at least three vowels
  applies = (string: string) => {
    const vowels = ["a", "e", "i", "o", "u"];
    let vowelCount = 0;

    for (let i = 0; i < string.length; i++) {
      if (vowels.includes(string[i])) {
        vowelCount++;
      }
    }

    return vowelCount >= 3;
	};
}
