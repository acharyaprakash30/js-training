//there are two types of datatypes in js

//1.primitive datatypes
//there are 7 primitive datatypes

// 1. String
// 2. Number
// 3. Bigint
// 4. Boolean
// 5. Undefined
// 6. Null
// 7. Symbol

//2.non primitive datatypes
//1.array
//2.object



//1.strings example
const name = 'ram';
const name1 = "hari";
const result = `The names are ${name} and ${name1}`;
// Backticks are generally used when you need to include variables or expressions into a string. This is done by wrapping variables or expressions with ${variable or expression} as shown above.


//2.numbers example
const number1 = 3;
const number2 = 3.433;
const number3 = 3e5 // 3 * 10^5
const number4 = 3e-5;

const number5 = 3/0;
console.log(number5); // Infinity

const number6 = -3/0;
console.log(number6); // -Infinity

// strings can't be divided by numbers
const number7 = "abc"/3; 
console.log(number7);  // NaN  




//3.JavaScript BigInt
// In JavaScript, Number type can only represent numbers less than (253 - 1) 
//and more than -(253 - 1). However, if you need to use a larger number than that, you can use the BigInt data type.
// BigInt value
const value1 = 900719925124740998n;

// const value3 = 900719925124740998;
// console.log(value3,"====================value 3");

// Adding two big integers
const result1 = value1 + 1n;
console.log(result1); // "900719925124740999n"

const value2 = 900719925124740998n;

// Error! BitInt and number cannot be added
// const result2 = value2 + 1; 
// console.log(result2); 



//4.JavaScript Boolean
const dataChecked = true;
const valueCounted = false;

//5.JavaScript undefined
let myname;
console.log(myname); // undefined

let name2 = undefined;
console.log(name2); // undefined

//6.JavaScript null
const number = null;


 //7.JavaScript Symbol
 // two symbols with the same description
 //A value having the data type Symbol can be referred to as a symbol value.
 // Symbol is an immutable primitive value that is unique.
 //For example,

const value8 = Symbol('hello');
const value9 = Symbol('hello');
//Though value8 and value9 both contain 'hello',
// they are different as they are of the Symbol type.

console.log(value8); //output:Symbol('hello')
console.log(value8 == value9); //output:false because symbol are unique

//get the symbol value
console.log(value8.description)







