// 1. you have an odd array (array with odd number). [1, 3, 5, 7, 9]. now convert this array into an even array (array with even numbers). [2, 4, 6, 8, 10]. do this using for loop & array.map() method. hints: add one to any odd number  and it will become an even number.

const numbers = [1, 3, 5, 7, 9];
let evenArray = []
for (const number of numbers) {
    even = number + 1
    evenArray.push(even)
}
// console.log(evenArray)

const evenArray1 = numbers.map(num => num + 1);
// console.log(evenArray1)

/**
 * 2. you are given an array say: [33, 50, 79, 78, 90, 101, 30]. 
 * now return/get all the elements which are divisible by 10 using array. filter() method. 
 * Now do the same task of question 2. But do this using array find nethod. 
 * Then compare the outupt of question 2 & question 3.
 */

const numbers1 = [33, 50, 79, 78, 90, 101, 30];
const divisibleBy10 = numbers1.filter(num => num % 10 === 0);
// console.log(divisibleBy10)
const divisibleBy10Find = numbers1.find(num => num % 10 === 0);
// console.log(divisibleBy10Find)


/**
 * 3. you have an array of object: const instructor = [{name: 'Nodi', age: 28, position: 'Senior'}, {name: 'Akil', age: 26, position: 'Junior'}, {name: 'Shobuj', age: 30, position: 'Senior'}] your task is to display the instructor name that has the position senior using filter
*/
const instructor = [
    { name: 'Nodi', age: 28, position: 'Senior' },
    { name: 'Akil', age: 26, position: 'Junior' },
    { name: 'Shobuj', age: 30, position: 'Senior' }
]

const instructorPosition = instructor.filter(inst => inst.position);
const seniorInstructor = instructorPosition.map(ins => ins.name);
console.log(seniorInstructor)

// 4. const people = [{name: 'Meena', age: 20}, {name: 'Rina', age: 15}, {name: 'Suchorita', age: 22}] q1: follow above array of objects. so, you have 3 objects as array element. can you find out the total sum from here? 20 + 15 + 22 = 57. The output will be 57, what are you thinking? yeah! do it with for loop. I know you can do it. But! Wait!!!  Do the same task using array.reduce() method.

const people = [
    { name: 'Meena', age: 20 },
    { name: 'Rina', age: 15 },
    { name: 'Suchorita', age: 22 }
];

const peopleAgeSum = people.reduce((a, b) => a + b.age, 0)
console.log(peopleAgeSum)
let sumAges = 0;
for (const person of people) {
    const age = person.age;
    sumAges = sumAges + age
}
console.log(sumAges)
