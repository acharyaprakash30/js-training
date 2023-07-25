// 1. Creating an array using array literal:
// let arrayName = [value1, value2, ...];

// Initializing while declaring
let courses = ["HTML", "CSS", "Javascript", "React"];
console.log(courses)

// 2. Creating an array using the JavaScript new keyword:
// let arrayName = new Array();

// Initializing while declaring
let arr1 = new Array(3)
arr1[0] = 10
arr1[1] = 20
arr1[2] = 30
console.log("Array 1: ", arr1)

// Creates an array having elements 10, 20, 30, 40, 50
let arr2 = new Array(10, 20, 30, 40, 50);
console.log("Array 2: ", arr2)

// Creates an array of 5 undefined elements
let arr3 = new Array(5);
console.log("Array 3: ", arr3)

// Creates an array with one element
let arr4 = new Array("1BHK");
console.log("Array 4: ", arr4)


// There are two methods by which we can recognize a JavaScript array:
// By using Array.isArray() method
// By using instanceof method 

const course = ["HTML", "CSS", "Javascript"];
console.log("Using Array.isArray() method: ",Array.isArray(course))
console.log("Using instanceof method: ",course instanceof Array)


