const add = (first, second) => first + second;
const getFullName = (first, last) => first + " " + last;
const multiply = (a, b) = a * b;

const result = multiply(7, 8);
console.log(result);

const addAll = (a, b, c, d, e, f) => a + b+ c + d + e + f;
console.log(addAll);

// no parameter arrow function
const getPie = () => 3.1416;

// One parameter
const doubleIt = (num) => num * 2;

// One parameter simsple version
const fiveTimes = num => num * 5;

// multi line arrow function
// if you want to return something, use the return
const doMath = (x,y, z) => {
    const firstSum = x + y;
    const secondSum = y + z;
    const multiplyResult = firstSum + secondSum;
    const result = multiplyResult / 2;
    return result;
}