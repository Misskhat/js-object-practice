// doubled through map function

const number3 = [12, 234, 34, 23, 4334]
const double = number3.map(x => x * 2);
console.log(double);
const fiveBounes = number3.map(x => x + 5);
console.log(fiveBounes);
const names = ['ami', 'jani', 'array', 'map'];
const lengthNames = names.map(x => x.length);
console.log(lengthNames);
const firstLetter = names.map(x => x[0]);
console.log(firstLetter)