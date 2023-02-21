// function declaration
function add(first , second){
    const total = first + second;
    return total;
}
// If we write the same function as arrow function
const add = (first, second) => first + second;


// function expression
// const add1 = function add1 (first, second){
//     const total = rist + second;
//     return total;
// }
// If we write the same function as arrow function
const add1 = (first, second) => first + second;

// function expression with anonymous function
// const add2 = function(first, second){
//     const total = first + second;
//     return total;
// }
// If we write the same function as arrow function
const add2 = (first, second) => first + second;

const result = add(10, 20);
console.log(result);