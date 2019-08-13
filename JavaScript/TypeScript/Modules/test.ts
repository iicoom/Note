import { StringValidator } from "./StringValidator";
import { ZipCodeValidator, LettersOnlyValidator } from "./export";


let strings = ["Hello", "89995", "101"];

// Validators to use
let validators: { [s: string]: StringValidator; } = {};
validators["ZIP code"] = new ZipCodeValidator();
validators["Letters only"] = new LettersOnlyValidator();

strings.forEach(s => {
	for (let name in validators) {
		console.log(`"${s}" - ${ validators[name].isAcceptable(s) ? "matches" : "does not match"} ${ name }`)
	}
})