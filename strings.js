// Basic variable and string usage
const name = "Muhammad Shaheryar Akhtar";
const grade = 12;

console.log(`My name is ${name} and I’m in ${grade} class.`);

// Creating a string using String object
const gameName = new String('Shery');

// Strings in JavaScript

// 1. Declaring strings using single quotes
let singleQuoteString = 'Hello, World!';
console.log(singleQuoteString); // Output: Hello, World!

// 2. Declaring strings using double quotes
let doubleQuoteString = "JavaScript is fun!";
console.log(doubleQuoteString); // Output: JavaScript is fun!

// 3. Declaring strings using backticks (Template Literals)
let templateLiteralString = `This is a template literal.`;
console.log(templateLiteralString); // Output: This is a template literal.

// 4. Template literals allow embedding expressions
let userName = "Alice";
let greeting = `Hello, ${userName}!`; // Embedding a variable using ${}
console.log(greeting); // Output: Hello, Alice!

// 5. Strings can span multiple lines using backticks
let multiLineString = `This is a
multi-line string.`;
console.log(multiLineString);
// Output:
// This is a
// multi-line string.

// 6. Escaping special characters in strings
let escapedString = 'It\'s a sunny day!'; // Use backslash (\) to escape single quote
console.log(escapedString); // Output: It's a sunny day!

// 7. String concatenation using the + operator
let part1 = "Hello, ";
let part2 = "world!";
let concatenatedString = part1 + part2;
console.log(concatenatedString); // Output: Hello, world!

// 8. Common string methods
let sampleString = "JavaScript";

// a) Getting the length of a string
console.log(sampleString.length); // Output: 10

// b) Converting to uppercase
console.log(sampleString.toUpperCase()); // Output: JAVASCRIPT

// c) Converting to lowercase
console.log(sampleString.toLowerCase()); // Output: javascript

// d) Accessing characters by index
console.log(sampleString[0]); // Output: J (first character)
console.log(sampleString[sampleString.length - 1]); // Output: t (last character)

// e) Finding the index of a substring
console.log(sampleString.indexOf("Script")); // Output: 4

// f) Checking if a string includes a substring
console.log(sampleString.includes("Java")); // Output: true

// g) Extracting a substring
console.log(sampleString.substring(0, 4)); // Output: Java

// h) Replacing part of a string
console.log(sampleString.replace("Java", "Type")); // Output: TypeScript

// i) Splitting a string into an array
let csv = "red,green,blue";
// console.log(csv.split(",")); // Output: ["red", "green", "blue"]

// 9. Strings are immutable
let immutableString = "Hello";
immutableString[0] = "J"; // This does nothing
console.log(immutableString); // Output: Hello (unchanged)

// 10. Combining strings with numbers
let age = 25;
let combinedString = "I am " + age + " years old.";
console.log(combinedString); // Output: I am 25 years old.

let messyString = "   Hello, World!   ";
let cleanString = messyString.trim();
console.log(messyString);
console.log(cleanString); // Output: "Hello, World!"

const url='https://bug-free-guide-r4g5x6q4rxjg35v49.github.dev/'
console.log(url.replace('dev','shery'))
console.log(url.includes('dev'))
console.log(csv.split(","))