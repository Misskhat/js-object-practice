const numbers = [1, 2, 4, 5, 3];
const result = numbers.forEach(n => console.log(n));
const result1 = numbers.forEach(n => n); //not contain value in result
console.log(result) //undefined

const aboveThree = numbers.filter(n => n > 3);
console.log(aboveThree)

const aboveThreeFind = numbers.find(n => n > 3);
console.log(aboveThreeFind)

// today we learn 
/**
 * 1. map; take array and retun as per condition array
 * 2. forEach; take array but not retun
 * 3. filter; take array and filter as per condition and return array if ture
 * 4. find; take array and find one element as per condition if true
 * 5. reduce;
 */

// reduce
const totalOrSum = numbers.reduce((a, c) => a + c, 0);
console.log(totalOrSum)