// Any declaration(such as a variable, function, class, type alias, or interface) 
// can be exported by addding the export keyword


// ZipCodeValidator.ts
import { StringValidator } from "./StringValidator";

const numberRegexp = /^[0-9]+$/;
const lettersRegexp = /^[A-Za-z]+$/;

// export class ZipCodeValidator implements StringValidator {
// 	isAcceptable(s: string) {
// 		return s.length === 5 && numberRegexp.test(s);
// 	}
// }

// Export statements are handy when exports need to be renamed for consumers
// 
class ZipCodeValidator implements StringValidator {
    isAcceptable(s: string) {
        return s.length === 5 && numberRegexp.test(s);
    }
}

class LettersOnlyValidator implements StringValidator {
	isAcceptable(s: string) {
		return lettersRegexp.test(s);
	}
}

export { ZipCodeValidator, LettersOnlyValidator };
export { ZipCodeValidator as mainValidator }