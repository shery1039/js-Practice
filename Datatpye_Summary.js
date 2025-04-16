// Primitive Data Types in JavaScript:
// These are the basic building blocks of data. They are immutable (cannot be changed).

// 1. Number: Represents numeric values.
let age = 25; // Example of a number

// 2. String: Represents text or sequence of characters.
let name = "Shery"; // Example of a string

// 3. Boolean: Represents true or false values.
let isStudent = true; // Example of a boolean

// 4. Undefined: A variable that has been declared but not assigned a value.
let x; // x is undefined

// 5. Null: Represents an intentional absence of any value.
let y = null; // y is null

// 6. Symbol: Represents a unique identifier (introduced in ES6).
let sym = Symbol("unique"); // Example of a symbol

// 7. BigInt: Represents integers larger than the Number type can hold (introduced in ES11).
let bigNumber = 1234567890123456789012345678901234567890n; // Example of a BigInt

// Non-Primitive Data Types in JavaScript:
// These are objects or collections of values. They are mutable (can be changed).

// 1. Object: A collection of key-value pairs.
let person = {
    firstName: "John",
    lastName: "Doe",
    age: 30
}; // Example of an object

// 2. Array: A list-like object used to store multiple values.
let colors = ["red", "green", "blue"]; // Example of an array

// 3. Function: A block of code designed to perform a particular task.
// Example of a function
const myfunction=function() {
    console.log("My Name is Shaheryar Akhtar");
    
}
// 4. Date: Represents a specific point in time.
let today = new Date(); // Example of a Date object

// 5. Other built-in objects: Examples include Map, Set, WeakMap, WeakSet, etc.
let map = new Map(); // Example of a Map