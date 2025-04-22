let cars = ["Toyota", "Honda", "BMW"];
console.log(cars[0]);  // Toyota
console.log(cars[2]);  //


let arr = [1, 2, 3];
console.log("Original Array:", arr);

arr.push(4);
console.log("After push(4):", arr);  // [1, 2, 3, 4]

arr.pop();
console.log("After pop():", arr);    // [1, 2, 3]

arr.unshift(0);
console.log("After unshift(0):", arr); // [0, 1, 2, 3]

arr.shift();
console.log("After shift():", arr);    // [1, 2, 3]

console.log(arr.includes(5))
console.log(arr.indexOf(2));

let ar1 = [10, 20, 30, 40, 50];

let sliced = ar1.slice(1, 4);  // from index 1 to 3 (not 4)
console.log("Original:", ar1);    // [10, 20, 30, 40, 50]
console.log("Sliced:", sliced);   // [20, 30, 40]

let arr2splice = [10, 20, 30, 40, 50];
let removed = arr2splice.splice(1, 2);  // remove 2 elements from index 1
console.log("After splice:", arr2splice);    // [10, 40, 50]
console.log("Removed:", removed);     // [20, 30]

