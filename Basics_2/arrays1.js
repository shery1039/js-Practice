let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];

let result = arr1.concat(arr2);

console.log("Result:", result);     // [1, 2, 3, 4, 5, 6]
console.log("Original arr1:", arr1); // [1, 2, 3] (unchanged)

collect=[...arr1,...arr2]
console.log(collect);


let arr = [1, 2, [3, 4]];

let flatArr = arr.flat();
console.log(flatArr);  // [1, 2, 3, 4]

let arr22 = [1, 2, [3, 4, [5, 6]]];

let oneLevel = arr22.flat();     // Default depth = 1
console.log(oneLevel);         // [1, 2, 3, 4, [5, 6]]

let twoLevels = arr22.flat(2);  // Flatten two levels deep
console.log(twoLevels);       // [1, 2, 3, 4, 5, 6]

let nested = [1, [2, [3, [4, 5]]]];

let flat = nested.flat(Infinity);
console.log(flat);  // [1, 2, 3, 4, 5]

let str = "hello";
let chars = Array.from(str);

console.log(chars);  // ['h', 'e', 'l', 'l', 'o']

let score1=100
let score2=200
let score3=300

console.log(Array.of(score1,score2,score3));
