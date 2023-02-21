const max = Math.max(12, 85, 8954, 654);
// console.log(max);

const numbers = [12, 885, 54, 78, 55];
// wrong way
// const largest = Math.max(numbers);

// right way
const largest = Math.max(...numbers);
console.log(largest);

// If the arrow or object is placed in another variable, both will return the same object
const numbers2 = numbers;
numbers.push(55);
numbers2.push(777);
console.log(numbers);
console.log(numbers2);

// If you want to make another arrow from an arrow
const number3 = [...numbers];

const number4 = [444, 789, ... numbers, 121];