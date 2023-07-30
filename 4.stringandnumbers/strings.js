//js string methods
// String length
// String slice()
// String substring()
// String substr()
// String replace()
// String replaceAll()
// String toUpperCase()
// String toLowerCase()
// String concat()
// String trim()
// String trimStart()
// String trimEnd()
// String padStart()
// String padEnd()
// String charAt()
// String charCodeAt()
// String split()


// 1.length
//The length property returns the number of characters in a string.

// defining a string
let sentence = "I love Programiz.";
// returns number of characters in the sentence string
let len = sentence.length;
console.log(len);
// Output:
// 17

// 2.slice
// The slice() method extracts and returns a section of a string.
const message = "JavaScript is fun";

// slice the substring from index 0 to 10-1
let result = message.slice(0, 10);
let lastone = message.slice(4, -2);
let anotherslice = message.slice(12);
console.log(result);
console.log("last one",lastone)
// Output: JavaScript

// 3.The substring() method returns a specified part of the string 
// between start and end indexes.
const substrmsg = "JavaScript is fun.";

// get the substring starting from index 0 to 10
let ressubstr = substrmsg.substring(0, 10);
console.log(ressubstr);

// Output: JavaScript








