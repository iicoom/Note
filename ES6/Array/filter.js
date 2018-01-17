function isBigEnough(value) {
  return value >= 10;
}

var filtered = [12, 5, 8, 130, 44].filter(isBigEnough);

// filtered is [12, 130, 44]

// ES6 way

const isBigEnough = value => value >= 10;

let [...spraed]= [12, 5, 8, 130, 44];

let filtered = spraed.filter(isBigEnough);

// filtered is [12, 130, 44]