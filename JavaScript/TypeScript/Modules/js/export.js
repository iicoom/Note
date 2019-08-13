"use strict";
// Any declaration(such as a variable, function, class, type alias, or interface) 
// can be exported by addding the export keyword
exports.__esModule = true;
var numberRegexp = /^[0-9]+$/;
var lettersRegexp = /^[A-Za-z]+$/;
// export class ZipCodeValidator implements StringValidator {
// 	isAcceptable(s: string) {
// 		return s.length === 5 && numberRegexp.test(s);
// 	}
// }
// Export statements are handy when exports need to be renamed for consumers
// 
var ZipCodeValidator = /** @class */ (function () {
    function ZipCodeValidator() {
    }
    ZipCodeValidator.prototype.isAcceptable = function (s) {
        return s.length === 5 && numberRegexp.test(s);
    };
    return ZipCodeValidator;
}());
exports.ZipCodeValidator = ZipCodeValidator;
exports.mainValidator = ZipCodeValidator;
var LettersOnlyValidator = /** @class */ (function () {
    function LettersOnlyValidator() {
    }
    LettersOnlyValidator.prototype.isAcceptable = function (s) {
        return lettersRegexp.test(s);
    };
    return LettersOnlyValidator;
}());
exports.LettersOnlyValidator = LettersOnlyValidator;
