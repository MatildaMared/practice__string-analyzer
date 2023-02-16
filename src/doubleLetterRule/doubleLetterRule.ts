import { Rule } from "Rule/Rule";

export class DoubleLetterRule implements Rule {
  applies = (string: string) => {
    for (let i = 0; i < string.length; i++) {
      if (string[i] === string[i + 1]) {
        return true;
      }
    }

    return false;
  }
}