// import { ZipCodeValidator } from "./export";
import { ZipCodeValidator as ZCV } from "./export";

// Import the entire module into a single variable, and use it to access the module exports 
import * as validator from "./export";


// let myValidator = new ZipCodeValidator();
let myValidator = new ZCV();

let myVal = new validator.ZipCodeValidator();