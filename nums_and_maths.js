const number=400
console.log(number);

const balance=new Number(400)
console.log(balance);

//to string 

console.log(balance.toString())
console.log(balance.toString().length)
console.log(balance.toFixed(2));

//precision value

let num = 123.456;

// Format the number to 4 significant digits
let precisionResult = num.toPrecision(4);

console.log(precisionResult); // Output: "123.5"

// Format the number to 2 significant digits
precisionResult = num.toPrecision(2);

console.log(precisionResult); // Output: "1.2e+2"

// Format the number to 6 significant digits
precisionResult = num.toPrecision(6);

console.log(precisionResult); // Output: "123.456"

const hundreds = 10000000;
console.log(hundreds.toLocaleString());


`-------------------Maths------------------`

console.log(Math);

// Math.round(): Rounds a number to the nearest integer
let rounded = Math.round(4.7); // Output: 5
console.log(rounded);

// Math.ceil(): Rounds a number up to the next largest integer
let ceiling = Math.ceil(4.1); // Output: 5
console.log(ceiling);

// Math.floor(): Rounds a number down to the nearest integer
let floor = Math.floor(4.9); // Output: 4
console.log(floor);

// Math.max(): Returns the largest number from a set of numbers
let max = Math.max(10, 20, 30); // Output: 30
console.log(max);

// Math.min(): Returns the smallest number from a set of numbers
let min = Math.min(10, 20, 30); // Output: 10
console.log(min);

// Math.sqrt(): Returns the square root of a number
let squareRoot = Math.sqrt(16); // Output: 4
console.log(squareRoot);

// Math.pow(): Returns the base to the exponent power (base^exponent)
let power = Math.pow(2, 3); // Output: 8
console.log(power);

// Math.random(): Generates a random number between 0 and 1.
let random = Math.random(); // Output: A random number like 0.456
console.log(random);

// Math.abs(): Returns the absolute value of a number
let absolute = Math.abs(-5); // Output: 5
console.log(absolute);

// Math.trunc(): Returns the integer part of a number by removing any fractional digits
let truncated = Math.trunc(4.9); // Output: 4
console.log(truncated);

const minNumber=1
const maxNumber=6

console.log(Math.floor(Math.random()*(maxNumber-minNumber+1)));
