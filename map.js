const numbers = [4, 5, 2, 3, 10]
// make double above array;

// old method
// const double2 = []
// for (const number of numbers) {
//     const numberdouble = number * 2;
//     double2.push(numberdouble);
// }
// console.log(double2);

// use little simplify map function.

// map method 1:
function doubleIt(num) {
    console.log(num)
    return num * 2;
}

const double3 = numbers.map(doubleIt);
console.log(double3)

// map method 2:
const doubleIt2 = num => num * 2;
const output1 = numbers.map(doubleIt2);
console.log(output1)

// map method 3:
const finalMethodResult = numbers.map(num => num * 2);
console.log(finalMethodResult);

// map is a callback function. it's work on array and return an array.