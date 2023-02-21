const fish = {
    name: 'King Hilsa',
    address: 'Chandpur',
    color: 'silver',
    phone: '01717658899',
    price: 4000
}
// const phone = fish.phone;
// const color = fish.color;
// const price = fish.price;
// console.log(phone);
// console.log(color);
// console.log(price);


const {name} = fish;
console.log(name);

const {age, profession} = {age: 'Humaion', age: 24, profession: 'web developer'};
console.log(profession);


// Array destructuring
const [first, another] = [44, 99, 54, 25];
console.log(first, another);


const nayoks = ['alomgir', 'riyaj', 'salman-sah'];
const [king, lost, notun] = nayoks;
console.log(notun);


function getNames(){
    return ['Kobir', 'Humaion'];
}
const [lastName, firstName] = getNames();
console.log(firstName, lastName);